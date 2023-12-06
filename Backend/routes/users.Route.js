import express from 'express'
import {User} from '../models/userModel.js'
const router = express.Router();

router.post('/newuser',async(req,res)=>{
    try {
      const newUser = {
        username : req.body.username,
        useremail: req.body.useremail,
        userpass: req.body.userpass
      }
  
      const user =await User.create(newUser)
      return res.status(201).send(user)
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  })
  
  export default router;
