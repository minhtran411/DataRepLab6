import BookItem from "./bookItem";
import Read from "./read";

function Books(props) {
    //Everything between {} in react is javascript
    //mybooks is an array => apply map function onto it
    //a call back function
    //we give them a key as an identifier
    return props.myBooks.map(
        
    (book)=>{
        return <BookItem myBook = {book} key={book._id} reload={() => props.reload()}></BookItem>
        //calling the reload attribute and run the function, this attribute is from the parent component
    }

    );
  }
  
  
  
  export default Books;