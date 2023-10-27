const express = require('express');
const app = express();
const port = 3100;
const axios =  require('axios');

app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get("/test", async (req, res) => {
  try {
      const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=hP7BBiN85Jx75ty933fkaNA7jErxAmQRwAoPGjkV")
      res.json(response.data)
      console.log(response.data)
  }
  catch (err) {
      console.log(err)
  }
})


app.post('/submit', async (req, res) => {
  const userInput = req.body.userInput;
  console.log('User input:', userInput);

  // You can perform additional processing or call other APIs here if needed

  // Send a response back to the client using Axios
  try {
    // const response = await axios.post('http://localhost:3000/submit-response', { userInput });
    console.log('Response from another API:', userInput);
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Send a response back to the client
  res.send('Received user input: ' + userInput);
});

app.use(axios)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
