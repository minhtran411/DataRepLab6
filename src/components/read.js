import App from "../App";
import BookItem from "./bookItem";
import Footer from "./footer"
import Books from "./books";


//Useful link: https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components

//Read Page
//Read passes data down to embedded component 
//that component then flow the data down
function Read() {
  //JSON book information
  const data = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },
    {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
    ];

  return (
    <div className="readPage">
     
    <App></App>
    <h3>Hello from ReadPage</h3>
    
    
    <Books myBooks = {data}></Books>
    
    

    <hr style={{margin: 100 + 'px'}} />
    <Footer></Footer>


    </div>

  );
}



export default Read;