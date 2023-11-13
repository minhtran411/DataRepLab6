import Books from "./books";
import React from "react";
import App from "../App";
import Card from 'react-bootstrap/Card';

function BookItem(props) {
//show individual book
         return(
            <Card border="primary" className="bookItem" >
                <Card.Title className="cardTitle"><h2>{props.myBook.title}</h2></Card.Title>
                <Card.Subtitle paddingBottom="5">By: {props.myBook.author}</Card.Subtitle>
                <Card.Text><i>Book Id: {props.myBook._id}</i></Card.Text>
                <Card.Img src={props.myBook.image}></Card.Img>
            
            </Card>
         

        );
         
    }
        
  
  
  
  
  export default BookItem;