// import express from "express" -> is need to use means we need to write type: module in package.json above the keywords
import express from "express"
import notesRoutes from "./routes/notesRoutes.js"


const app = express();


app.use("/api/notes", notesRoutes);

// app.get("/api/notes", (req,res) => {
//    // send the notes
//     res.status(200).send("you got 50 notes");
// })

// app.post("/api/notes", (req,res) => {
//     // add the notes
//      res.status(201).json("note added successfully");
// })

// app.put("/api/notes/:id", (req,res) => {
//     // update the notes
//      res.status(200).json("note updated successfully");
// })

// app.delete("/api/notes/:id", (req,res) => {
//     // delete the notes
//      res.status(200).json("note deleted successfully");
// })



app.listen(5001, ()=> {
    console.log("Server started on PORT 5001");
})