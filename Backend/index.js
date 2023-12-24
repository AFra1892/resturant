import express from'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import foodsRoute from './routes/foodsRoute.js';
import usersRoute from './routes/users.Route.js'
import cors from 'cors';
import {User} from './models/userModel.js'
import jwt from 'jsonwebtoken'

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





app.get('/api/personal', async(req,res)=>{
  const token = req.headers['x-access-token']

  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const email = decoded.email
    const user = await User.findOne({email:email})
    // console.log(user);
    return res.json({status:'ok',user:user})
  } catch (error) {
    console.log(error);
    res.json({status:'error',error:'invalid token'})
  }
})
app.get('/api/coddingaddict',(req, res,) => {
  const authHeader = req.headers.authorization

  

  const token = authHeader.split(' ')[1]

  console.log(token);
 
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { name , email } = decoded
    res.status(200).json({name,email,orders})
    
})


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
