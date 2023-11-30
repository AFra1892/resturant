const express = require('express')
const { Food } =require('../models/foodModel.js');

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.imgUrl ||
      !request.body.price||
      !request.body.cal||
      !request.body.category

    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newFood = {
      name: request.body.name,
      imgUrl: request.body.imgUrl,
      price: request.body.price,
      cal: request.body.cal,
      category: request.body.category
    };

    const food = await Food.create(newFood);

    return response.status(201).send(food);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const foods = await Food.find({});

    return response.status(200).json({
      count: foods.length,
      data: foods,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const food = await Food.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Food.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Food not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports =  router;
