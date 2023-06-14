const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to pass JSON request body
app.use(express.json());

// import routes from TodoApi
const todoRoutes = require("./routes/todos");
const { createTodo } = require("./controllers/createTodo");

// mount the todo API route
app.use("/api/v1",todoRoutes);

// start server

app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`);
})

// Connection to the Database

const dbConnect = require("./config/database");
dbConnect();

// Default Routes
app.get("/", (req,res) => {
    res.send(`<h1>This is HomePage Baby.</h1>`);
})