const fs = require("fs");

//using uuid to create random ids 
const { v4: uuidv4 } = require('uuid');

let notesByUser = [];

fs.readFile("./db/db.json", (error, data) => {
    if (error) throw error;
    notesByUser = (JSON.parse(data));
});
//Function to update a note
function updateNote() {
    fs.writeFile("./db/db.json", JSON.stringify(notesByUser), (error) => {
        if (error) throw error;
    });
}
//function to post and delete notes
function notesOperation(notes) {
    notes.get("/api/notes", (request, response) => {
        response.json(notesByUser);
    });

    notes.post("/api/notes", (request, response) => {
        const additionalNote = request.body;
        additionalNote.id = (uuidv4());
        notesByUser.push(additionalNote);
        updateNote();
        response.send(notesByUser);
    });
    notes.delete("/api/notes/:id", (request, response) => {
        deleteID = request.params.id;
        for (let i = 0; i < notesByUser.length; i++) {
            if (notesByUser[i].id === deleteID) {
                notesByUser.splice(i, 1);
                updateNote();
                response.send(notesByUser);
                return;
            }
        }
    })
}
module.exports = notesOperation;