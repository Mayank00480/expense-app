const database = require('../database/index')
class Expense {
    static addProduct(title ,amount , date ){
      return database.execute('INSERT INTO expensetable(expenseName , expensePrice , expenseDate) VALUES(?,?,?)',[title , amount , date])
    }
    static getProduct(){
        return database.execute('SELECT * from expensetable');
    }
    static deleteProduct(id) {
        return database.execute('DELETE FROM expensetable WHERE id = ?',[id]);
    }
    static editProduct(id ,title ,amount ,date){
        return database.execute('UPDATE expensetable set expenseName = ? ,expensePrice = ?,expenseDate = ? WHERE id = ?',[title , amount , date ,id])
    }
}
module.exports = Expense;