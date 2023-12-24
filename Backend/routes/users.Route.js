import express from 'express'
import {User} from '../models/userModel.js'
import {Food} from '../models/foodModel.js'
import jwt from 'jsonwebtoken'

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


//route for login logic
router.post('/api/login',async(req,res)=>{

  
  const user = await User.findOne({useremail:req.body.useremail})
   console.log(req.body.useremail); //inja dastresi darim be data vorodi ke tavasot karbar (input ha)

  if(!user){
    console.log('user not found');
    return res.status(404).json({status:'error',msg:"There is no exsiting acoount with this email"})
  }
  if(!(user.userpass === req.body.userpass) ){
    return res.status(404).json({status:'error',msg:"Wrong Password"})

  }
  const token = jwt.sign({
    name:user.username,
    email:user.useremail,
    img:user.usercustomimg,

  },process.env.JWT_SECRET)

  // const decoded = jwt.verify(token,process.env.JWT_SECRET)
  // const userr = decoded
  
  res.status(201).json({status:'ok',token:token })
  
});


router.delete('/:name/user/:id', async (request, response) => {
  try {
    const { id , name } = request.params;

    const result = await User.findOneAndUpdate({username:name}, {$pull:{orders:{_id:id}}});
    
    response.status(200).json(result)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.post('/api/show/orders',async(req,res)=>{
  const user = await User.findOne({username:req.body.name})
   console.log(req.body.name); //inja dastresi darim be data vorodi ke tavasot karbar (input ha)
   
  //  if(!user){
  //    console.log('user not found');
  //    return res.status(404).json({status:'error',msg:"There is no exsiting acoount with this email"})
  //  }
  const orders = user.orders
  // console.log(orders);
  res.status(200).json({orders:orders})

  
});
router.put('/api/orders/addItem',async(req,res)=>{
  console.log(req.body.data.username);
  const user = await User.findOneAndUpdate({username:req.body.data.username},  { $push: { orders: req.body.data.order } })
  
  res.status(200).send('updated')
});


  export default router;
