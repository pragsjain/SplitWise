// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;
let expenseSchema = new Schema(
    {
        expenseId: {
            type: String,
            unique: true
        },
        expenseName: {
            type: String,
        },
        expenseMembers: {
            type: Array,
            default: [],
        },
        amount: {
            type: Number,
        },
        splitOption: {
            type: String,
            default: 'equal',
        },
        groupId: {
            type: String,
        },
        expenseOn: {
            type: Date
        },
        addedOn: {
            type: Date
        },
        addedBy: {
            type: String,
        },
        deletedOn: {
            type: Date
        },
        deletedBy: {
            type: String,
        },
        updatedOn: {
            type: Date
        },
        updatedBy: {
            type: String,
        },
        expenseHistory: {
            type: Array
        }
    }
)

mongoose.model('Expense', expenseSchema);
