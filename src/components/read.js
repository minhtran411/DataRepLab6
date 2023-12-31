import App from "../App";
import Footer from "./footer"
import Books from "./books";
import { useEffect, useState } from 'react';
import axios from "axios";
//new from me
//Useful link: https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components

//Read Page
//Read passes data down to embedded component 
//that component then flow the data down
function Read() {
  //JSON book information
  //handle data
  //same logic with below: const data =[];
  const [data, setData] = useState([]);

  //retrieve json data by using hook useEffect, axios
  useEffect(() => {
    axios.get('http://localhost:4000/api/books') //axios is kind of like a promise, the web wont freeze
    .then(
      (response) => {
        console.log(response.data.myBooks)
        //name of the books in json blob
        setData(response.data.myBooks);
      }
    ) //async, callback function is a fn pass using another fn, fill in what we want the callback to do in then ()
    .catch(
      (err) => {
        console.log('Errors catched: '+err);
      }
    );
  }, []); // the [] brackets are to stop the useeffect to be called all the time


  //we create this function to reload the page after deleting a book doc
  const ReloadData = (e) => {
    axios.get('http://localhost:4000/api/books') //axios is kind of like a promise, the web wont freeze
    .then(
      (response) => {
        console.log(response.data.myBooks)
        //name of the books in json blob
        setData(response.data.myBooks);
      }
    ) //async, callback function is a fn pass using another fn, fill in what we want the callback to do in then ()
    .catch(
      (err) => {
        console.log('Errors catched: '+err);
      }
    );
  }

  return (
    <div className="readPage">
     
    <App></App>
    <h3>Hello from ReadPage</h3>
    
    
    <Books myBooks = {data} reload={ReloadData} ></Books> 
    {/* reload is a name we give our function, see it as an attribute, we use this to pass down to the child elements */}
    

    <hr style={{margin: 100 + 'px'}} />
    <Footer></Footer>


    </div>

  );
}



export default Read;