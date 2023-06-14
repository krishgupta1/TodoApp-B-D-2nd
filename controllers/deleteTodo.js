// Import the model
const Todo = require("../models/Todo.js");

// define route handler

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo Deleted",
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}