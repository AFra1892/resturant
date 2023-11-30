const express =  require('express');

const mongoose =  require('mongoose');
const foodsRoute = require('./routes/foodsRoute.js');
const cors =  require('cors');
require('dotenv').config()
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());


app.get('/', (request, response) => {
  
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/foods', foodsRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(5555, () => {
      console.log(`App is listening to port:5555...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
