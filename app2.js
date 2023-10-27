const axios = require('axios');

// Define the API endpoint URL and your API key
const apiUrl = 'http://127.0.0.1:8090/api/devices/24e124707c300242'; // Replace with your API endpoint
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6IjNhYmNjNDYyLTRkMTQtNDYzNi1hYTc1LWE2NmE2MDcxMWY0MyIsInR5cCI6ImtleSJ9.Tjbjqx4Y1P-aXmvOWhMPhBg-XulFcw-0shKbignV1Bw'; // Replace with your API key

// Define the headers with your API key
const headers = {
  'Grpc-Metadata-Authorization': `Bearer ${apiKey}`,
};

// Make an HTTP GET request to the ChirpStack API
axios
  .get(apiUrl, { headers })
  .then((response) => {
    // Handle the response data here
    console.log('Response:', response.data);
  })
  .catch((error) => {
    // Handle any errors here
    console.error('Error');
  });
