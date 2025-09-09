export function getAllNotes(req, res){
    // send the notes
    res.status(200).send("you just fetched  notes");
}
export function createNote(req, res){
    // create the notes
    res.status(201).json({message: "you just created a note"});
}

export function updateNote(req, res){
    // update the notes
    res.status(200).json({message: "note updated successfully"});
}

export function deleteNote(req, res){
    // delete the notes
    res.status(200).json({message: "note deleted successfully"});
}   

