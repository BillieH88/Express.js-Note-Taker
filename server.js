//Require file system module
const fs = require('fs');
// Require path module
const path = require('path');
// REQUIRE in the express Library
const express = require('express');
// Instantiate an express server
const app = express();
// Declare port value 
const PORT = 4500;

const notes = require('./db/db.json')


// response get is from index html page
app.get('/',(req,res) => {
console.log(notes);
res.sendFile(path.join(_dirname,'/public/index.html'));

})
// response get is from notes html page
app.get('/notes',(req,res) =>{
console.log('notes');
res.sendFile(path.join(_dirname,'/public/notes.html'));
})

app.get('/notes',(req,res) =>{
    console.log('notes');
    res.sendFile(path.join(_dirname,notes),JSON.stringify(notes))
    res.json(req.body);
    })


app.listen(PORT,()=>{
  console.log('Listening for PORT on' + PORT)


})