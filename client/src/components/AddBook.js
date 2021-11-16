import {useQuery,useMutation} from "@apollo/client";
import { getAuthorsQuery, addBookMutation,getBooks } from "../queries/queries";
import { useState } from "react";
const AddBook = () => {
    const [addBookMut,{dataMut,errorMut,loadingMut}]=useMutation(addBookMutation)
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')
    const {loading, error, data} = useQuery(getAuthorsQuery);
    if (loading|loadingMut) return <p>Loading Books...</p>;
    if (error|errorMut) return <p>Error </p>;
    const submitForm=(event)=>{
      event.preventDefault()
      console.log(name,genre,authorId)
      addBookMut({
         variables:{
         name:name,
         genre:genre,
         authorId:authorId,
       },
       refetchQueries:[{query:getBooks}]
      });
    }
    return (
        <form id="add-book" onSubmit={submitForm}>

        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={({target})=>setName(target.value)} value={name}/>
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={({target})=>setGenre(target.value)} value={genre}/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={({target})=>setAuthorId(target.value)} value={authorId}>
            {data.authors.map(author=>{
                return(<option key={author.id} value={author.id}>{author.name}</option>)
            })}
          </select>
        </div>
        <button>+</button>
      </form>
    )
}

export default AddBook
