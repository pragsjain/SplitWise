// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;


let groupSchema = new Schema(
    {
        groupId: {
            type: String,
            unique: true
        },
        groupName: {
            type: String,
            default: '',
            unique: true
        },
        groupMembers: {
            type: Array,
            default: [],
        },
        created: {
            type: Date,
        }
    }
)

mongoose.model('Group', groupSchema);
