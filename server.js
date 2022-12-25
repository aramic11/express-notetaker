// series of npm packages that will be used to give the server functionality
//Going to create an Express server with a port
const express = require("express");
const app = express();

const PORT = process.env.PORT || 6060;

//Need to handle data parsing so I will set up the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//allows our server to have some route files to give the server an understanding of how to respond to users or requested data from URLs
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//A listener with a port of 6060
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`)
 });