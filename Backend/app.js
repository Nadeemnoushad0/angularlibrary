const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
var bodyparser = require('body-parser');
const Bookdata = require('./src/model/Bookdata');
const Authordata = require('./src/model/Authordata');

app.use(cors());
app.use(bodyparser.json())

app.get('/books',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Bookdata.find()
    .then(function(books){
        res.send(books); 
    })        
});

app.get('/authors',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.send(authors);
    })        
});


app.listen(port,()=>{console.log("Server ready at "+ port);});
 