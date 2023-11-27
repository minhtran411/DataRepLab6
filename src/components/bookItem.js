import Books from "./books";
import React from "react";
import App from "../App";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import axios from 'axios';

function BookItem(props) {
//show individual book
         return(
            <Card border="primary" className="bookItem" >
                <Card.Header>
                     <Card.Title className="cardTitle"><h2>{props.myBook.title}</h2></Card.Title>
                </Card.Header>

                <Card.Body>
                    <Card.Subtitle paddingBottom="5">By: {props.myBook.author}</Card.Subtitle>
                    <Card.Text><i>Book Id: {props.myBook._id}</i></Card.Text>
                    <Card.Img src={props.myBook.image}></Card.Img>
                </Card.Body>
                
                <Link to={"/edit/"+props.myBook._id} paddingTop="5" className="btn btn-primary">Edit Info</Link>
                {/* add in delete button */}
                <Button variant="danger" onClick={(e) => {
                    e.preventDefault(); //prevent default prevent this function to be called automatically all the time
                    
                    //pass in axios and http delete method
                    //axios is a promised based web client make a HTTP Request with GET method and pass as part of the url
                    axios.delete('http://localhost:4000/api/book/'+ props.myBook._id)
                    .then(() => {
                        props.reload();
                    })
                    .catch((e) => {
                        console.log('Error when deleting ' + props.myBook._id);
                    })

                }}>Delete</Button>
            </Card>
         

        );
         
    }
        
  
  
  
  
  export default BookItem;