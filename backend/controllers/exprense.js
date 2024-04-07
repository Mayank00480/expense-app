const Expense = require('../models/expense')
exports.addExpense = (req , res , next) => {
const {title , amount , date} = req.body.data;
Expense.addProduct(title ,amount,date)
.then(resp => {
    res.json(resp);
})
.catch(err => {
    console.log(err);
})
}

exports.getProduct = (req,res,next) => {
    Expense.getProduct()
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        console.log(err);
        res.json(err);

    })
}

exports.deleteProduct = (req ,res, next) => {
    const {id} = req.params;
    Expense.deleteProduct(id)
    .then(resp => {
        console.log(resp);
        res.json(resp);
    })
    .catch(err => {
        console.log(err);
    })
}