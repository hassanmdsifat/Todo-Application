const express = require('express')
const app = express();
const todo = require('./todo');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(todo);

const PORT = process.env.PORT | 5000;
app.listen(PORT, ()=> console.log(`listening to port ${PORT}`));