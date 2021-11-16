import {useQuery} from "@apollo/client";
import { getBooks } from "../queries/queries";
import BookDetails from "./BookDetails";
import {useState} from 'react'

function BookList() {
  const {loading, error, data} = useQuery(getBooks);
  const [selected,setSelected]=useState(null)
  if (loading) return <p>Loading Books...</p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return (
    <div>
      <ul id="book-list">
        {data.books.map(book => (
          <li key={book.id} onClick={(e)=>{setSelected(book.id)}}>{book.name}</li>
        ))}
      </ul>
      {selected && <BookDetails bookId={selected}/>}
    </div>
  );
}

export default BookList;
