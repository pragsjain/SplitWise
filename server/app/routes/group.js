
const groupController = require("./../../app/controllers/groupController");
const appConfig = require("./../../config/appConfig")
const auth =require("./../middlewares/auth")


let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/groups`;

    // defining routes.

    app.get(baseUrl+'/:userId/all',auth.isAuthenticated,groupController.getAllGroup)

    app.get(baseUrl+'/view/:groupId',auth.isAuthenticated,groupController.viewByGroupId);

    app.post(baseUrl+'/:groupId/delete',auth.isAuthenticated,groupController.deleteGroup);

    app.put(baseUrl+'/:groupId/edit',auth.isAuthenticated,groupController.editGroup);

    app.post(baseUrl+'/create',auth.isAuthenticated,groupController.createGroup);

     /**
     * @apiGroup Group
     * @apiVersion  0.0.1
     * @api {get} /api/v1/groups/:userId/all Get all groups for a User
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "All Group Details Found",
            "status": 200,
            "data": [
                {
                "groupId": "nXSO1O5ZG",
                "created": "2020-05-26T12:24:58.000Z",
                "groupMembers": [
                    {
                    "userId": "KwMD65RIY",
                    "firstName": "Pragati",
                    "lastName": "Dugar",
                    "fullName": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "password": "$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS",
                    "userName": "prags",
                    "mobileNo": "",
                    "email": "pragsjainprags@gmail.com",
                    "createdOn": "2020-05-26T12:21:04.000Z"
                    }
                    {
                    "userId": "iwtLFJxMJ",
                    "firstName": "Yuvraj",
                    "lastName": "Dugar",
                    "fullName": "Yuvraj Dugar (yuvrajdugar@gmail.com)",
                    "password": "$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK",
                    "userName": "yuvraj",
                    "mobileNo": "",
                    "email": "yuvrajdugar@gmail.com",
                    "createdOn": "2020-05-26T12:24:25.000Z"
                    }
                ],
                "groupName": "Ahmedabad Trip"
                },
                {
                "groupId": "7UyizcPMw",
                "created": "2020-05-26T13:08:25.000Z",
                "groupMembers": [
                    {
                    "userId": "Bt9sf2ew7",
                    "firstName": "Akshay",
                    "lastName": "Soni",
                    "fullName": "Akshay Soni (mailakkiy@gmail.com)",
                    "password": "$2a$10$1s2mIQ8m/GXA3a5FlCFxCeF6ro34AqLTPIuW0N83iM6uBpInvyS2S",
                    "userName": "akshay.soni",
                    "mobileNo": "",
                    "email": "mailakkiy@gmail.com",
                    "createdOn": "2020-05-26T13:07:40.000Z"
                    },
                    {
                    "userId": "KwMD65RIY",
                    "firstName": "Pragati",
                    "lastName": "Dugar",
                    "fullName": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "password": "$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS",
                    "userName": "prags",
                    "mobileNo": "",
                    "email": "pragsjainprags@gmail.com",
                    "createdOn": "2020-05-26T12:21:04.000Z"
                    }
                ],
                "groupName": "Himachal Ki Masti"
                }
            ]
        }
    */

    /**
     * @apiGroup Group
     * @apiVersion  0.0.1
     * @api {get} /api/v1/groups/view/:groupId Get Group Detail
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * @apiParam {string} groupId Group Id. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "All Group Details Found",
            "status": 200,
            "data": {
                "_id": "5ecd0a9adcf1411cf7b866bc",
                "groupId": "nXSO1O5ZG",
                "created": "2020-05-26T12:24:58.000Z",
                "__v": 0,
                "groupMembers": [
                {
                    "createdOn": "2020-05-26T12:21:04.000Z",
                    "email": "pragsjainprags@gmail.com",
                    "mobileNo": "",
                    "userName": "prags",
                    "password": "$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS",
                    "fullName": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "lastName": "Dugar",
                    "firstName": "Pragati",
                    "userId": "KwMD65RIY"
                },
                {
                    "createdOn": "2020-05-26T12:23:45.000Z",
                    "email": "khushidugar@gmail.com",
                    "mobileNo": "",
                    "userName": "khushi",
                    "password": "$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976",
                    "fullName": "Khushi Dugar (khushidugar@gmail.com)",
                    "lastName": "Dugar",
                    "firstName": "Khushi",
                    "userId": "kLvhBFqEt"
                }
                ],
                "groupName": "Ahmedabad Trip"
            }
            }
    */

     /**
     * @apiGroup Group
     * @apiVersion  0.0.1
     * @api {get} /api/v1/groups/view/:groupId/delete Delete Group 
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * @apiParam {string} groupId Group Id. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
       {
            "error": false,
            "message": "Group is Deleted Successfully",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        }
    */


     /**
     * @apiGroup Group
     * @apiVersion  0.0.1
     * @api {get} /api/v1/groups/create Create Group
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "All Group Details Found",
            "status": 200,
            "data": {
                "__v": 0,
                "groupId": "0PTQa_DQq",
                "created": "2020-05-27T17:04:28.000Z",
                "_id": "5ece9d9cdcf1411cf7b866d2",
                "groupMembers": [
                {
                    "userId": "KwMD65RIY",
                    "firstName": "Pragati",
                    "lastName": "Dugar",
                    "fullName": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "password": "$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS",
                    "userName": "prags",
                    "mobileNo": "",
                    "email": "pragsjainprags@gmail.com",
                    "createdOn": "2020-05-26T12:21:04.000Z"
                },
                {
                    "userId": "kLvhBFqEt",
                    "firstName": "Khushi",
                    "lastName": "Dugar",
                    "fullName": "Khushi Dugar (khushidugar@gmail.com)",
                    "password": "$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976",
                    "userName": "khushi",
                    "mobileNo": "",
                    "email": "khushidugar@gmail.com",
                    "createdOn": "2020-05-26T12:23:45.000Z"
                }
                ],
                "groupName": "goa trip"
            }
        }
    */
    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}