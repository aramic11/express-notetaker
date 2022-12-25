const path = require("path");

module.exports = function(app) {
  // HTML GET Requests to handle when a user vists a page.
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found then it will default to index.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};