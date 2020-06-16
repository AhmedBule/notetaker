

var notesdb = require("../db/db.json");
var fs = require("fs");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    
    app.get("/api/notes", function (req, res) {
        var readdata = fs.readFileSync("./db/db.json")
        notesdb = JSON.parse(readdata)
        res.json(notesdb);
    });


    app.post("/api/notes", function (req, res) {

        notesdb.push(req.body);
        console.log(notesdb);
        fs.writeFileSync("./db/db.json", JSON.stringify(notesdb));
        res.json(notesdb);


    });


    app.delete("/api/notes/:id", function (req, res) {
        var noteid = req.params.id

        const deleteNote = [];

        for (let i = 0; i < dbJson.length; i++) {
            if (dbJson[i].id != noteid) {
              deleteNote.push(dbJson[i]);
            }

            fs.writeFile(outputPath, JSON.stringify(deleteNote), function (err) {
                if (err) return console.log(err);
              });
        // Empty out the arrays of data
        //fil iterate on notedb array
        //inside for loop check id == noteid
        //
        //fs -- db.json
        

        res.json(notesdb);
            }
    });
};
