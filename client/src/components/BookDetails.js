import {useQuery} from '@apollo/client'
import {getBook} from '../queries/queries'
const BookDetails = ({bookId}) => {
    const {data,error,loading}=useQuery(getBook,{variables:{id:bookId}})
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error </p>;
    console.log(data,error)
    console.log(bookId)
    return (
        <div id="book-details">
            <h2>{ data.book.name }</h2>
                <p>{ data.book.genre }</p>
                <p>{ data.book.author.name }</p>
                <p>All books by this author:</p>
                <ul className="other-books">
                    { data.book.author.books.map(item => {
                        return <li key={item.id}>{ item.name }</li>
                    })}
                </ul>
        </div>
    )
}

export default BookDetails
