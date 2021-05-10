const express = require("express");
const fs = require("fs");
const path = require('path');
// Instantiate an express server
const app = express();
// Declare port value
const PORT = 6200;

const routes= require("./routes");
var notes = require("./db/db.json")


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.get("/api/notes", (req, res)=> {
  console.log(notes);
      res.status(200).send(
          notes
      )
  })

app.post('/api/notes', (req,res) =>{
  const data = req.body;
  let newId = notes[notes.length -1].id +1;
  const allNewNotes = notes.concat({id: newId, ...data});
  notes = allNewNotes
  return res.status(201).send(allNewNotes);
});

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => {
  console.log("Listening for PORT on " + PORT);
});

