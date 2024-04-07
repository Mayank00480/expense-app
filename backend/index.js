const express = require('express');
const expenseRouter = require('./routes/expense');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(expenseRouter);


app.listen(4000,'localhost',() => {
    console.log('server is running');
})