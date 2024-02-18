// Load modules
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to allow requests from any origin
app.use(cors());

// Define your Yelp API key
const yelpApiKey = process.env.YELP_API_KEY;

// Define an error handling middleware
app.use((err, req, res, next) => {
  // Log the error
  console.error(err);

  // Send the error message and status to the client
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

// Create a router for yelp-api
const yelpRouter = express.Router();

// Define the route handler for fetching restaurants
yelpRouter.get('/restaurants', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    
    // Make a request to the Yelp API to search for restaurants within a 10-mile radius
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=16093&categories=restaurants`, {
      headers: {
        'Authorization': `Bearer ${yelpApiKey}`
      }
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch data from Yelp API');
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the data back to the client
    res.json(data);
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
});

// Use the router for yelp-api
app.use('/yelp-api', yelpRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*// Import modules
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Import cors module

// Create an Express app
const app = express();

// Set the port number
const port = 3000;

// Define the Yelp API key
const yelpApiKey = 'Z-oSkSgsfakkPa79kMG05llAA1FuP1gshz05cJaiDJ_B1pfNaDn6E73TCrO-f2qglI61cu_wxWcgxq_Cz6akVQIU5ERZ38lUqHPNxVy_oRoZPWOFYfsOK8ZZjkLRZXYx'; // Replace this with your own key

// Define the Yelp API endpoint
const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search';

// Use cors middleware
app.use(cors()); // Allow cross-origin requests

// Define a route handler for the /yelp-api path
app.get('/yelp-api', async (req, res) => {
  try {
    // Get the query parameters from the request
    const { term, location, radius } = req.query;

    // Construct the Yelp API request URL with the parameters
    const yelpApiRequestUrl = `${yelpApiUrl}?term=${term}&location=${location}&radius=${radius}`;

    // Make a GET request to the Yelp API with the API key in the header
    const yelpApiResponse = await fetch(yelpApiRequestUrl, {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`
      }
    });

    // Check if the response is OK
    if (yelpApiResponse.ok) {
      // Parse the response as JSON
      const yelpApiData = await yelpApiResponse.json();

      // Send the data back to the frontend as JSON
      res.json(yelpApiData);
    } else {
      // Throw an error if the response is not OK
      throw new Error(`Yelp API request failed: ${yelpApiResponse.status}`);
    }
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Start the server and listen on the port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
