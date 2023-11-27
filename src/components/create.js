import App from "../App";
import Footer from "./footer"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { redirect } from "react-router-dom";

//new from me
//Create Page

function Create() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault(); //stop this from being called all the time
    console.log('Title: '+title);
    console.log('Author: '+author);
    console.log('Image: '+image);

    const book = {
      title: title,
      image: image,
      author: author
    };

    axios.post('http://localhost:4000/api/books', book)
    .then((res) => {
      console.log(res.status);
        return redirect("/read");
    })
    .catch();
  };

  return (
    <div className="createPage">
      {/* This is called JSX - javascript xml
      Getting navbar and header from app*/}
      
      <App></App>
      <h3>Hello from CreatePage</h3>

      <form onSubmit={handleSubmit} method="POST" className="createBookForm">
        <div className="form-group">
        <h2>Create a new book in system</h2>
        <label>Add Book Title: 
        <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        </label>
        </div>
        <br/>
        <div className="form-group">
        <label>Add Book Author: 
        <input type="text" className="form-control" value={author} onChange={(e) => {setAuthor(e.target.value)}} />
        </label>
        </div>
        <br/>
        <div className="form-group">
        <label>Add Front Page URL: 
        <input placeholder="Leave blank if you don't have a book cover" type="text" className="form-control" value={image} onChange={(e) => {setImage(e.target.value)}} />
        </label>
        <br/>

        <Button variant="primary" type="submit" value="Create Book">Add Book</Button>

        </div>
      </form>
    

    <Footer></Footer>
    </div>

  
    
  );
}



export default Create;