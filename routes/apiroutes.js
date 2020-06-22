

var notesdb = require("../db/db.json");
var fs = require("fs");

var path = require("path");


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

        for (let i = 0; i < notesdb.length; i++) {
            if (parseInt(notesdb[i].id) != parseInt(noteid)) {
              deleteNote.push(notesdb[i]);
            }
        }   
            notesdb = deleteNote;
            console.log("DElete route",notesdb)
            //console.log(fs.readFile(path.join(__dirname + "../db/db.json")));
            // fs.writeFile(__dirname+"db.json", 
            fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote), function (err) {
                if (err) 
                console.log(err);
                res.json({"Delete":deleteNote})
              });
        

       
    });
};
