import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/book/' + id)
        .then((response) => {
            // Assign Response data to the arrays using useState.
            setTitle(response.data.title);
            setImage(response.data.image);
            setAuthor(response.data.author);
            })
        .catch(function (error) {
        console.log(error);
        })
    }, []);

    //On submit button when click
    const handleSubmit = (event) => {
        event.preventDefault();
        //create a new book obj based on information being set thru useState
        const newBook = {
            _id: id,
            title: title,
            image: image,
            author: author
        };

        //put to server.js
        axios.put('http://localhost:4000/api/book/' + id, newBook)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        })
        .catch((e) => {console.log(e)});
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add Book Title: </label>
                <input type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Add Release Year: </label>
                <input type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Add Poster Url: </label>
                <input type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="form-group">
                 <input type="submit" value="Edit Book" className="btn btn-primary" />
             </div>
        </form>
    </div>
    );
}