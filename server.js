const express = require("express")
const app = express()

app.use(express.json())

let tasks = [
    { id: 1, description: "Learn Node", completed: false }
]

// get tasks
app.get("/tasks", (req, res) => {
    res.json(tasks)
})

// create task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        description: req.body.description,
        completed: false
    }

    tasks.push(newTask)
    res.json(newTask)
})

const port = 3000
app.listen(port, () => {
    console.log("Server running on port " + port)
})