const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const cors = require('cors')
const app = express();
const port = 4000;

const mongoose = require('mongoose');
const { toBeRequired } = require('@testing-library/jest-dom/matchers');

//get my update
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    
});


//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:DataRep2023@datarep.7j0g6v6.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title: String, 
    image:String, 
    author:String
})

const bookModel = mongoose.model('books',bookSchema)

app.post('/api/books', (req,res) =>{
    console.log(req.body)
    
    bookModel.create({
        title: req.body.title,
        image: req.body.image,
        author:req.body.author
    })
    .then(
        function() {
            return res.redirect('/api/books')
        }
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

app.get('/api/book/:id', async (req,res) => {
    console.log(req.params.id);

    let book = await bookModel.findById({_id:req.params.id})
    res.send(book)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})