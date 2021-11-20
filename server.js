// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
/* define variable to hold the port number */
const port = 3000;
// Setup Server
app.listen (port, () => {
    console.log('running on localhost:' , port);
} );

/* GET route that send all the data in the object projectData */
app.get ('/sendAllData', (req,res) => {
    res.send(projectData);
});

/* POST route that adds all the data to the object projectData */
app.post('/addIncomingData', (req,res) => {
    let nData = req.body;
    newEntry = {
        temperature : nData.temperature,
        date : nData.date,
        feeling : nData.uResponse,
    };
    /* As the projectData is an object we didn't use .push */
    projectData = newEntry;
});
