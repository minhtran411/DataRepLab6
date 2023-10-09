import BookItem from "./bookItem";
import Read from "./read";

function Books(props) {
    //Everything between {} in react is javascript
    //mybooks is an array => apply map function onto it
    //a call back function
    //we give them a key as an identifier
    return props.myBooks.map(
        
    (book)=>{
        return <BookItem myBook = {book} key={book.isbn}></BookItem>
    }

    );
  }
  
  
  
  export default Books;