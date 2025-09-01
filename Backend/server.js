// import express from "express" -> is need to use means we need to write type: module in package.json above the keywords

const express = require("express")

const app = express();

app.get("/api/notes", (req,res) => {
   // send the notes
    res.status(200).send("you got 20 notes");
})


app.listen(5001, ()=> {
    console.log("Server started on PORT 5001");
})