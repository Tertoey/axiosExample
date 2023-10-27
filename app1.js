const express = require('express');
const app = express();
const port = 3232; // You can choose any available port you prefer

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index1.html');
})

// Route to handle form submission
app.post('/submit', (req, res) => {
  const userInput = req.body.userInput;
  console.log('User input:', userInput);

  // Process the user input here (if needed)

  // Send a response back to the client
  res.send('Received user input: ' + userInput);
});

app.post('/chirpstack', (req, res) => {
  console.log(req.body.object);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
