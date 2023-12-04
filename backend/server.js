const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const cors = require('cors')
const app = express();
const port = 4000;

const mongoose = require('mongoose');
const { toBeRequired } = require('@testing-library/jest-dom/matchers');

//get my update
//i don't need to use cors if i combine both client side & server side together 
//npm run build to do production build - but if I change the code in my client side i have to do the production build again.

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept");
//     next();
    
// });


// Serve the static files from the React app
//This code is to make both client side & server side being host from 1 source/domain
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));



//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:DataRep2023@datarep.7j0g6v6.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//mongoose Scheme will create a model/schema, whatever you declare in here we be kind of an obj
const bookSchema = new mongoose.Schema({
    title: String, 
    image:String, 
    author:String
})

//Create the model from Schema
const bookModel = mongoose.model('books',bookSchema)

//create Book
app.post('/api/books', (req,res) =>{
    console.log(req.body)
    
    bookModel.create({
        title: req.body.title,
        image: req.body.image || 'https://th.bing.com/th/id/OIP.fGy18fRk-XcfLNXdTXQIHAAAAA?rs=1&pid=ImgDetMain',
        author:req.body.author
    })
    .then(
        function() {
            return res.redirect('/api/books')
        }
        //how can i trigger redireting to read page?
    )
    .catch(
        (e) => {res.send('data not received!')}
    )

})

app.get('/', (req, res) => {
  res.send('Hello books')
})



//get books api
app.get('/api/books', async (req, res) => {

    let data = await bookModel.find({}); 
    //console.log(data)
    
    res.json({ 

        myBooks:data, 
        'MyMessage':'Hello data' 
        
        }) 
})

//to edit book => get it by id
app.get('/api/book/:id', async (req,res) => {
    //console.log(req.params.id);

    let book = await bookModel.findById({_id:req.params.id})

    res.send(book)
})

//change the info => onsubmit on edit.js
app.put('/api/book/:id', async (req,res) => {
    console.log("Edit: "+req.params.id);

    //we have put in edit.js via axios 
    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.send(book)

})

//delete http method, delete the book record by id
//use async and await whenever we have to implement promise
app.delete('/api/book/:id', async (req,res) => {
    console.log('Delete ' + req.params.id)

    let book = await bookModel.findByIdAndDelete(req.params.id);
    res.send(book);
})

// have to be added at the bottom just over app.listen to get all the the app.get
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });


    //app listen to have server hosted
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})