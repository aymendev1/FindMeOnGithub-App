require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/defaultinfos", async (req, res) => {
  try {
    let DefaultUser = "aymendev1"; // My username :) ;
    let url = `https://api.github.com/users/${DefaultUser}`;
    const infodata = await fetch(url);
    const LoadedData = await infodata.json();
    return res.status(200).json({ LoadedData });
  } catch (e) {
    // in case of error
    res.status(400).json({ success: false, data: e });
  }
});
var SearchRequest;
function RunSearch() {
  // When the user run a search , an app.get got created with data the user wants
  app.get("/searchedinfos", async (req, res) => {
    try {
      let url = `https://api.github.com/users/${SearchRequest}`;
      const infodata = await fetch(url);
      const LoadedData = await infodata.json();
      return res.status(200).json({ LoadedData });
    } catch (e) {
      res.status(400).json({ sucess: false, data: e });
    }
  });
}
app.post("/", (req, res) => {
  SearchRequest = String(req.body.searchquery);
  RunSearch();
});
app.listen(process.env.PORT, () => {
  console.log("Server listenning ");
});
