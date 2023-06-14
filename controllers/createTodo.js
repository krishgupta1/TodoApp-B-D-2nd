// Import the model

const Todo = require("../models/Todo.js");

// define route handler

exports.createTodo = async(req, res) => {
    try{
        // extract title and descriptions from request body 
        const {title, description} = req.body;
        // Create a new Todo Object and insert in DB
        const response = await Todo.create({title,description});
        // Send a JSON response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response, 
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.log(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message, 
        })
    }
}