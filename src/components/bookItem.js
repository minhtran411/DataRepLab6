import Books from "./books";
import React from "react";
import App from "../App";
import Card from 'react-bootstrap/Card';

function BookItem(props) {
//show individual book
         return(
            <Card border="primary" className="bookItem" >
                <Card.Title className="cardTitle"><h2>{props.myBook.title}</h2></Card.Title>
                <Card.Subtitle>By: {props.myBook.authors}</Card.Subtitle>
                <Card.Text><i>ISBN: {props.myBook.isbn}</i></Card.Text>
                <Card.Img src={props.myBook.thumbnailUrl}></Card.Img>
            
            </Card>
         

        );
         
    }
        
  
  
  
  
  export default BookItem;