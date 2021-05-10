const express = require("express");
// Instantiate an express server
const app = express();
// Declare port value
const PORT = 6200;
const notes = require("./db/db.json");
const routes = require("./routes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Listening for PORT on " + PORT);
});
