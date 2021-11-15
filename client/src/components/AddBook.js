import {useQuery} from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";
import { useState } from "react";
const AddBook = () => {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')
    const {loading, error, data} = useQuery(getAuthorsQuery);
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error </p>;
    console.log(data)
    const submitForm=(event)=>{
      event.preventDefault()
      console.log(name,genre,authorId)
    }
    return (
        <form id="add-book" onSubmit={submitForm}>

        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={setName} />
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={setGenre}/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={setAuthorId}>
            {data.authors.map(author=>{
                return(<option key={author.id} value={author.id}>{author.name}</option>)
            })}
          </select>
        </div>
        <button>Add Book</button>
      </form>
    )
}

export default AddBook
