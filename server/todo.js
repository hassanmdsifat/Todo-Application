const express = require('express')
const router = express.Router();
const uuid = require('uuid');

let allTodos = [
];

router.get('/todos', (req, res)=>{
    res.send(allTodos);
});

router.post('/todos', (req, res) => {
    let newId = uuid.v4();
    let newTodo = req.body;
    newTodo['id'] = newId;
    allTodos.push(newTodo);
    res.send(newTodo);
});

router.delete('/todos/:id', (req, res) =>{
    let todoId = req.params.id;
    allTodos = allTodos.filter((curindex)=> {
        return curindex['id'] != todoId
    });
    res.send(allTodos);
});

module.exports = router;