const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');

//Importing the model here 
const GroupModel = mongoose.model('Group')

let getAllGroup = (req, res) => {
    GroupModel.find()
        .select('-__v -_id')
        .lean() //make it plain javascript object,not mongoose object
        .exec((err, result) => { //trying to execute this function
            if (err) {
                logger.error(err, 'groupController: getAllGroup()', 5)
                let apiResponse = response.generate(true, 'Failed To Find Groups', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.error('No Group Found', 'groupController: getAllGroup()', 5)
                let apiResponse = response.generate(true, 'No Group Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Group Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all groups

/**
 * function to get single group.
 */
let viewByGroupId = (req, res) => {

    GroupModel.findOne({ 'groupId': req.params.groupId }, (err, result) => {

        if (err) {
            logger.error(err, 'groupController: viewByGroupId()', 5)
            let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            logger.error('No Group Found', 'groupController: viewByGroupId()', 5)
            let apiResponse = response.generate(true, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Group Details Found', 200, result)
            res.send(apiResponse)
        }
    })
}


/**
 * function to edit group by admin.
 */
let editGroup = (req, res) => {

    // console.log('groupId',groupId);
    editGroup=req.body
    //console.log(req);
    //  console.log('title',req.body['title']);
     console.log('watchers->',req.body.watchers);

    console.log('édit Group->',editGroup)
    GroupModel.findOneAndUpdate({ 'groupId': req.params.groupId }, {$set:editGroup}, { new: true }).exec((err, result) => {
        if (err) {
            logger.error(err, 'groupController: editGroup()', 5)
            let apiResponse = response.generate(true, 'Failed To Edit group', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            logger.error('No Group Found', 'groupController: editGroup()', 5)
            let apiResponse = response.generate(true, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Group Details Found', 200, result)
            res.send(apiResponse)
        }
    })
}


let deleteGroup = (req, res) => {
    GroupModel.remove({ 'groupId': req.params.groupId }, (err, result) => {
        if (err) {
            logger.error(err, 'groupController: deleteGroup()', 5)
            let apiResponse = response.generate(true, 'Failed To Delete Group', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            logger.error('No Group Found', 'groupController: deleteGroup()', 5)
            let apiResponse = response.generate(true, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Group is Deleted Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}


let createGroup = (req, res) => {
    let groupId = shortid.generate()
    //console.log('groupId',groupId);
    let newGroup = new GroupModel({
        groupId: groupId,
        groupName: req.body.groupName,
        groupMembers: req.body.groupMembers,
        created: time.now(),
    }) // end new group model

    newGroup.save((err, result) => {
        if (err) {
            logger.error(err.message, 'groupController: createGroup', 10)
            let apiResponse = response.generate(true, 'Failed to create new Group', 500, null)
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'All Group Details Found', 200, result)
            res.send(apiResponse)   
        }        
    }) // end new group save
}




module.exports = {
    getAllGroup: getAllGroup,
    createGroup: createGroup,
    viewByGroupId: viewByGroupId,
    editGroup: editGroup,
    deleteGroup: deleteGroup
}