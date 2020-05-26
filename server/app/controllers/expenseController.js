const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');

//Importing the model here 
const ExpenseModel = mongoose.model('Expense')

let getAllExpense = (req, res) => {
    if(parseInt(req.query.numberOfExpensePerPage)==0 && parseInt(req.query.page==0))
    getAllExpenseWithPagination(req, res)
    else
    {
        ExpenseModel.find({ 'groupId': req.params.groupId })
            .select('-__v -_id')
            .lean() //make it plain javascript object,not mongoose object
            .exec((err, result) => { //trying to execute this function
                if (err) {
                    logger.error(err, 'expenseController: getAllExpense()', 5)
                    let apiResponse = response.generate(true, 'Failed To Find Expenses', 500, null)
                    res.send(apiResponse)
                } else if (result == undefined || result == null || result == '') {
                    logger.error('No Expense Found', 'expenseController: getAllExpense()', 5)
                    let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                    res.send(apiResponse)
                } else {
                    ExpenseModel.count({ 'groupId': req.params.groupId }, function( err, count){
                        console.log( "Number of expense:", count );
                        let data={}
                        data.count=count;
                        data.expenseList=result;
                        let apiResponse = response.generate(false, 'All Expense Details Found', 200, data)
                        res.send(apiResponse) ; 
                    })
                }
            })
    }
}// end get all expenses

let getAllExpenseWithPagination = (req, res) => {
    let numberOfExpensePerPage=parseInt(req.query.numberOfExpensePerPage);
    let page=parseInt(req.query.page);
    console.log(page,numberOfExpensePerPage);
    if(numberOfExpensePerPage)
    ExpenseModel.find({ 'groupId': req.params.groupId })
        .select('-__v -_id')
        .lean() //make it plain javascript object,not mongoose object
        .skip(numberOfExpensePerPage * (page - 1)).limit(numberOfExpensePerPage )
        .exec((err, result) => { //trying to execute this function
            if (err) {
                logger.error(err, 'expenseController: getAllExpense()', 5)
                let apiResponse = response.generate(true, 'Failed To Find Expenses', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.error('No Expense Found', 'expenseController: getAllExpense()', 5)
                let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                res.send(apiResponse)
            } else {
                ExpenseModel.count({ 'groupId': req.params.groupId }, function( err, count){
                    console.log( "Number of expense:", count );
                    let data={}
                    data.count=count;
                    data.expenseList=result;
                    let apiResponse = response.generate(false, 'All Expense Details Found', 200, data)
                    res.send(apiResponse) ; 
                })
            }
        })
}// end get all expenses

/**
 * function to get single expense.
 */
let viewByExpenseId = (req, res) => {

    ExpenseModel.findOne({ 'expenseId': req.params.expenseId }, (err, result) => {

        if (err) {
            logger.error(err, 'expenseController: viewByExpenseId()', 5)
            let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            logger.error('No Expense Found', 'expenseController: viewByExpenseId()', 5)
            let apiResponse = response.generate(true, 'No Expense Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Expense Details Found', 200, result)
            res.send(apiResponse)
        }
    })
}


/**
 * function to edit expense by admin.
 */
let editExpense = (req, res) => {
    editExpense=req.body
    //console.log('édit Expense->',editExpense)
    ExpenseModel.findOneAndUpdate({ 'expenseId': req.params.expenseId }, {$set:editExpense}, { new: true }).exec((err, result) => {
        if (err) {
            logger.error(err, 'expenseController: editExpense()', 5)
            let apiResponse = response.generate(true, 'Failed To Edit expense', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            logger.error('No Expense Found', 'expenseController: editExpense()', 5)
            let apiResponse = response.generate(true, 'No Expense Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Expense Details Found', 200, result)
                res.send(apiResponse)
        }
    })

    
}


let deleteExpense = (req, res) => {
    ExpenseModel.remove({ 'expenseId': req.params.expenseId }, (err, result) => {
        if (err) {
            logger.error(err, 'expenseController: deleteExpense()', 5)
            let apiResponse = response.generate(true, 'Failed To Delete Expense', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            logger.error('No Expense Found', 'expenseController: deleteExpense()', 5)
            let apiResponse = response.generate(true, 'No Expense Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Expense is Deleted Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}

let createExpense = (req, res) => {
    let expenseId = shortid.generate()
    //console.log('expenseId',expenseId);
    let newExpense = new ExpenseModel({
        expenseId: expenseId,
        expenseName: req.body.expenseName,
        expenseMembers: req.body.expenseMembers,
        amount: req.body.amount,
        splitOption: req.body.splitOption,
        groupId: req.body.groupId,
        expenseOn:req.body.expenseOn,
        addedOn: req.body.addedOn,
        addedBy: req.body.addedBy,
        deletedOn: req.body.deletedOn,
        deletedBy: req.body.deletedBy,
        updatedBy: req.body.updatedBy,
        updatedOn: req.body.updatedOn,
        expenseHistory: req.body.expenseHistory
    }) // end new expense model

    newExpense.save((err, result) => {
        if (err) {
            logger.error(err.message, 'expenseController: createExpense', 10)
            let apiResponse = response.generate(true, 'Failed to create new Expense', 500, null)
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'All Expense Details Found', 200, result)
            res.send(apiResponse)   
        }        
    }) // end new expense save
}




module.exports = {
    getAllExpense: getAllExpense,
    createExpense: createExpense,
    viewByExpenseId: viewByExpenseId,
    editExpense: editExpense,
    deleteExpense: deleteExpense
}