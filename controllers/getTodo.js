const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try {
        // fetch all todo items form  database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched",
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: "Internal Server Error",
            message:"Server Error",
        }) 
    }
}

exports.getTodoById = async (req, res) => {
    try{
        // Extract todo items basis on ID
        const id  = req.params.id;
        const todo = await Todo.findById({_id: id})
        // data for given id not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message : "No Data found with Given ID ",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        });
    }
}