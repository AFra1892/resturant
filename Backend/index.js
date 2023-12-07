import express from'express';

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import foodsRoute from './routes/foodsRoute.js';
import usersRoute from './routes/users.Route.js'
import cors from 'cors';


const app = express();
dotenv.config()

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());


app.get('/', (request, response) => {
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});



app.use('/foods', foodsRoute);
app.use('/users', usersRoute);

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
