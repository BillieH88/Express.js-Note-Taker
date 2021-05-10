const path = require("path");
const router = require("express").Router();
// response get is from notes html page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// response get is from index html page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;
