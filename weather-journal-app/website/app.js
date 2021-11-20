/* Global Variables */

/* URL to get the temperature according to the zip code the user entered */
const uRL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
/* The personal API Key for OpenWeatherMap API */
/* use &units=metric to get the Temperature in celsius */
const aKey = '&appid=12fecefaa67115aa5f8757685071fa91&units=metric';
/* this variable for the generate button */
const genButton = document.getElementById('generate');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;

/* add an Event Listener when the user click on the generate button */
genButton.addEventListener('click',() => {
    const zipC = document.getElementById('zip').value;
    /* Variable to know what the user feels */
    const feel = document.getElementById('feelings').value;
    /* check if the client click on the button and forget to enter the zip code there's an alert message will show */
    if (zipC === '')
    {
        alert('You Must Enter the Zip code.');
    }
    else {
        getTempInfo(uRL,zipC,aKey)
        .then( (data) => {
            postData('/addIncomingData',{temperature : data.main.temp, date : newDate, uResponse : feel})
        })
        .then((data) => {
            dynUpdate()
        })
    }
});


/* async function to make a GET request to the OpenWeatherMap API */
const getTempInfo = async (url,zip,key) => {
    const res = await fetch (url+zip+key);
    try{
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error",error);
    }
};

/* POST request to add the API data */
const postData = async (url = '' , projectData = {}) => {
    const res = await fetch (url, {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify(projectData)
    });
    try{
        const nData = await res.json()
        return nData;
    }catch(error){
        console.log("error",error);
    }
};

/* Dynami Updat UI */
const dynUpdate = async () => {
    const req = await fetch('/sendAllData');
    try{
        /* Convert The Data into JSON */
        const sData = await req.json();
        document.getElementById('date').innerHTML = `Date : ${sData.date}`;
        document.getElementById('temp').innerHTML = `Temperature : ${sData.temperature} `;
        document.getElementById('content').innerHTML = `I feel : ${sData.feeling}`;
    } catch(error){
        console.log("error",error);
    }
};