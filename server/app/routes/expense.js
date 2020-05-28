
const expenseController = require("./../../app/controllers/expenseController");
const appConfig = require("./../../config/appConfig")
const auth =require("./../middlewares/auth")


let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/expenses`;

    // defining routes.

    app.get(baseUrl+'/:groupId/all',auth.isAuthenticated,expenseController.getAllExpense)

    app.get(baseUrl+'/view/:expenseId',auth.isAuthenticated,expenseController.viewByExpenseId);

    app.post(baseUrl+'/:expenseId/delete',auth.isAuthenticated,expenseController.deleteExpense);

    app.put(baseUrl+'/:expenseId/edit',auth.isAuthenticated,expenseController.editExpense);

    app.post(baseUrl+'/create',auth.isAuthenticated,expenseController.createExpense);

    /**
     * @apiGroup Expense
     * @apiVersion  0.0.1
     * @api {get} /api/v1/expenses/:groupId/all Get all expenses for a Group
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
            "message": "All Expense Details Found",
            "status": 200,
            "data": {
                "count": 2,
                "expenseList": [
                {
                    "expenseId": "zTU_G-M3f",
                    "expenseName": "Magic show Tickets",
                    "amount": 900,
                    "groupId": "nXSO1O5ZG",
                    "addedOn": "2020-05-26T12:26:19.617Z",
                    "addedBy": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "expenseHistory": [
                    {
                        "expenseHistoryNotesBy": "Pragati Dugar (pragsjainprags@gmail.com) created expense 'Magic show Tickets'"
                    }
                    ],
                    "splitOption": "equal",
                    "expenseMembers": [
                    {
                        "owedShare": 300,
                        "isOwer": true,
                        "paidShare": 900,
                        "isSolePayer": true,
                        "isMultiplePayer": false,
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
                        "owedShare": 300,
                        "isOwer": true,
                        "paidShare": 0,
                        "isSolePayer": false,
                        "isMultiplePayer": false,
                        "userId": "kLvhBFqEt",
                        "firstName": "Khushi",
                        "lastName": "Dugar",
                        "fullName": "Khushi Dugar (khushidugar@gmail.com)",
                        "password": "$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976",
                        "userName": "khushi",
                        "mobileNo": "",
                        "email": "khushidugar@gmail.com",
                        "createdOn": "2020-05-26T12:23:45.000Z"
                    },
                    {
                        "owedShare": 300,
                        "isOwer": true,
                        "paidShare": 0,
                        "isSolePayer": false,
                        "isMultiplePayer": false,
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
                    ]
                },
                {
                    "expenseId": "TtkQyc3vp",
                    "expenseName": "Dinner at Lalit Palace",
                    "amount": 2000,
                    "groupId": "nXSO1O5ZG",
                    "addedOn": "2020-05-26T12:27:19.377Z",
                    "addedBy": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "expenseHistory": [
                    {
                        "expenseHistoryNotesBy": "Pragati Dugar (pragsjainprags@gmail.com) created expense 'Dinner at Lalit Palace'"
                    }
                    ],
                    "splitOption": "equal",
                    "expenseMembers": [
                    {
                        "owedShare": 666.6666666666666,
                        "isOwer": true,
                        "paidShare": 2000,
                        "isSolePayer": true,
                        "isMultiplePayer": false,
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
                        "owedShare": 666.6666666666666,
                        "isOwer": true,
                        "paidShare": 0,
                        "isSolePayer": false,
                        "isMultiplePayer": false,
                        "userId": "kLvhBFqEt",
                        "firstName": "Khushi",
                        "lastName": "Dugar",
                        "fullName": "Khushi Dugar (khushidugar@gmail.com)",
                        "password": "$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976",
                        "userName": "khushi",
                        "mobileNo": "",
                        "email": "khushidugar@gmail.com",
                        "createdOn": "2020-05-26T12:23:45.000Z"
                    },
                    {
                        "owedShare": 666.6666666666666,
                        "isOwer": true,
                        "paidShare": 0,
                        "isSolePayer": false,
                        "isMultiplePayer": false,
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
                    ]
                }
                ]
            }
        }
    */

    /**
     * @apiGroup Expense
     * @apiVersion  0.0.1
     * @api {get} /api/v1/expenses/view/:expenseId Get Expense Detail
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * @apiParam {string} expenseId Expense Id. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "All Expense Details Found",
            "status": 200,
            "data": {
                "_id": "5ecd0ac7dcf1411cf7b866bd",
                "expenseId": "zTU_G-M3f",
                "expenseName": "Magic show Tickets",
                "amount": 900,
                "groupId": "nXSO1O5ZG",
                "addedOn": "2020-05-26T12:26:19.617Z",
                "addedBy": "Pragati Dugar (pragsjainprags@gmail.com)",
                "__v": 0,
                "expenseHistory": [
                {
                    "expenseHistoryNotesBy": "Pragati Dugar (pragsjainprags@gmail.com) created expense 'Magic show Tickets'"
                }
                ],
                "splitOption": "equal",
                "expenseMembers": [
                {
                    "createdOn": "2020-05-26T12:21:04.000Z",
                    "email": "pragsjainprags@gmail.com",
                    "mobileNo": "",
                    "userName": "prags",
                    "password": "$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS",
                    "fullName": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "lastName": "Dugar",
                    "firstName": "Pragati",
                    "userId": "KwMD65RIY",
                    "isMultiplePayer": false,
                    "isSolePayer": true,
                    "paidShare": 900,
                    "isOwer": true,
                    "owedShare": 300
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
                    "userId": "kLvhBFqEt",
                    "isMultiplePayer": false,
                    "isSolePayer": false,
                    "paidShare": 0,
                    "isOwer": true,
                    "owedShare": 300
                },
                {
                    "createdOn": "2020-05-26T12:24:25.000Z",
                    "email": "yuvrajdugar@gmail.com",
                    "mobileNo": "",
                    "userName": "yuvraj",
                    "password": "$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK",
                    "fullName": "Yuvraj Dugar (yuvrajdugar@gmail.com)",
                    "lastName": "Dugar",
                    "firstName": "Yuvraj",
                    "userId": "iwtLFJxMJ",
                    "isMultiplePayer": false,
                    "isSolePayer": false,
                    "paidShare": 0,
                    "isOwer": true,
                    "owedShare": 300
                }
                ]
            }
        }
    */

     /**
     * @apiGroup Expense
     * @apiVersion  0.0.1
     * @api {get} /api/v1/expenses/view/:expenseId/delete Delete Expense 
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * @apiParam {string} expenseId Expense Id. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Expense is Deleted Successfully",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        }
    */

     /**
     * @apiGroup Expense
     * @apiVersion  0.0.1
     * @api {get} /api/v1/expenses/:expenseId/edit Edit Expense
     *
     * @apiHeader  {string} Authorization auth-token of the user. (auth headers) (required)
     * 
     * @apiHeaderExample  {json} Request-Example:
         {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg"
         }
     *
     * @apiParam {string} expenseId Expense Id. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "All Expense Details Found",
            "status": 200,
            "data": {
                "_id": "5ecea38fdcf1411cf7b866d3",
                "expenseId": "q3P7Q8w1C",
                "expenseName": "Adventure Sports",
                "amount": 10000,
                "groupId": "nXSO1O5ZG",
                "addedOn": "2020-05-27T17:30:30.190Z",
                "addedBy": "Pragati Dugar (pragsjainprags@gmail.com)",
                "__v": 0,
                "updatedBy": "Pragati Dugar (pragsjainprags@gmail.com)",
                "updatedOn": "2020-05-27T17:32:14.893Z",
                "expenseHistory": [
                {
                    "expenseHistoryNotesBy": "Pragati Dugar (pragsjainprags@gmail.com) created expense 'Adventure Sports'"
                },
                {
                    "expenseHistoryNotesBy": "Pragati Dugar (pragsjainprags@gmail.com) updated expense 'Adventure Sports'",
                    "expenseHistoryNotes": [
                    "Khushi Dugar (khushidugar@gmail.com) is removed from Expense",
                    "Pragati Dugar (pragsjainprags@gmail.com) share changed from Rs.3333.33 to Rs.6000.00",
                    "Yuvraj Dugar (yuvrajdugar@gmail.com) share changed from Rs.3333.33 to Rs.4000.00"
                    ]
                }
                ],
                "splitOption": "percentage",
                "expenseMembers": [
                {
                    "createdOn": "2020-05-26T12:21:04.000Z",
                    "email": "pragsjainprags@gmail.com",
                    "mobileNo": "",
                    "userName": "prags",
                    "password": "$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS",
                    "fullName": "Pragati Dugar (pragsjainprags@gmail.com)",
                    "lastName": "Dugar",
                    "firstName": "Pragati",
                    "userId": "KwMD65RIY",
                    "isMultiplePayer": false,
                    "isSolePayer": true,
                    "paidShare": 10000,
                    "isOwer": true,
                    "owedShare": 6000,
                    "owedPercentageShare": 60
                },
                {
                    "createdOn": "2020-05-26T12:24:25.000Z",
                    "email": "yuvrajdugar@gmail.com",
                    "mobileNo": "",
                    "userName": "yuvraj",
                    "password": "$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK",
                    "fullName": "Yuvraj Dugar (yuvrajdugar@gmail.com)",
                    "lastName": "Dugar",
                    "firstName": "Yuvraj",
                    "userId": "iwtLFJxMJ",
                    "isMultiplePayer": false,
                    "isSolePayer": false,
                    "paidShare": 0,
                    "isOwer": true,
                    "owedShare": 4000,
                    "owedPercentageShare": 40
                }
                ]
            }
        }
    */

     /**
     * @apiGroup Expense
     * @apiVersion  0.0.1
     * @api {get} /api/v1/expenses/create Create Expense
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
            "message": "All Expense Details Found",
            "status": 200,
            "data": {
                "__v": 0,
                "expenseId": "q3P7Q8w1C",
                "expenseName": "Adventure Sports",
                "amount": 10000,
                "groupId": "nXSO1O5ZG",
                "addedOn": "2020-05-27T17:30:30.190Z",
                "addedBy": "Pragati Dugar (pragsjainprags@gmail.com)",
                "_id": "5ecea38fdcf1411cf7b866d3",
                "expenseHistory": [
                {
                    "expenseHistoryNotesBy": "Pragati Dugar (pragsjainprags@gmail.com) created expense 'Adventure Sports'"
                }
                ],
                "splitOption": "equal",
                "expenseMembers": [
                {
                    "owedShare": 3333.3333333333335,
                    "isOwer": true,
                    "paidShare": 10000,
                    "isSolePayer": true,
                    "isMultiplePayer": false,
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
                    "owedShare": 3333.3333333333335,
                    "isOwer": true,
                    "paidShare": 0,
                    "isSolePayer": false,
                    "isMultiplePayer": false,
                    "userId": "kLvhBFqEt",
                    "firstName": "Khushi",
                    "lastName": "Dugar",
                    "fullName": "Khushi Dugar (khushidugar@gmail.com)",
                    "password": "$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976",
                    "userName": "khushi",
                    "mobileNo": "",
                    "email": "khushidugar@gmail.com",
                    "createdOn": "2020-05-26T12:23:45.000Z"
                },
                {
                    "owedShare": 3333.3333333333335,
                    "isOwer": true,
                    "paidShare": 0,
                    "isSolePayer": false,
                    "isMultiplePayer": false,
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
                ]
            }
            }
    */
    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}