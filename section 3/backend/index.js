const express = require('express'); // Import the exprss module by the type 

const app = express(); // Creating an instance of an express application 

const PORT = 5000; // Defining the port number for the 

//Routing 

app.get('/',(req, res) =>{
    res.send('Response from the server')
})

app.get('/add',(req, res) =>{
    res.send('Response from Add Route')
})


app.listen(PORT, ()=>{
console.log('Sever is running on port-'+ PORT ) // Logging a message when the server starts.
});