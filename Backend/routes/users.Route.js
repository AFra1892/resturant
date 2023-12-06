import express from 'express'
import {User} from '../models/userModel.js'
import {Food} from '../models/foodModel.js'
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
  
  // Route for Get All Users from database
  router.get('/newusers', async (request, response) => {
    try {
      const users = await User.find({});
  
      return response.status(200).json({
        count: users.length,
        data: users,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for Get One Book from database by id
router.get('/:username', async (request, response) => {
  try {
    const { username } = request.params;

    const user = await User.find({username});
    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

  export default router;
