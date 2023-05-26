const express = require('express');
const bookRouter = require('./route/bookRouter');

const app = express();

app.use(express.json());
app.use('/books',bookRouter);

app.listen(3000,()=>{
console.log('listen on 3000');
});
