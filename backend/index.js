const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// port
const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(cors());

// mongodb connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todolist")
.then(() => console.log("Db connected"))
.catch((err) => console.error(err));

app.use("/todos", todoRoutes);

// server listening
app.listen(PORT, () => {
    console.log("Server is listening "+ PORT);
});