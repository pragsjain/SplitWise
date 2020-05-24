
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
     * @apiExpense Expense
     * @apiVersion  1.0.0
     * @api {get} /api/v1/expenses/all Get all expenses
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
            "data": [
                {
                "expenseId": "stjcwBEaq",
                "created": "2020-04-22T11:25:03.000Z",
                "watchers": [
                    "Gaurav Dugar (gauri)"
                ],
                "assignee": "Gaurav Dugar (gauri)",
                "reporter": "Pragati Dugar (prags)",
                "status": "In Progress",
                "description": "<h1>sf<em><u> sdasdds d ds dd </u></em></h1>",
                "title": "sfssada d  s d fd"
                },
                {
                "expenseId": "XKpilZuU7",
                "created": "2020-04-22T11:36:59.000Z",
                "watchers": [],
                "assignee": "Pragati Dugar (prags)",
                "reporter": "Pragati Dugar (prags)",
                "status": "Done",
                "description": "<h1><em><u>wdsed</u><span class=\"ql-cursor\">﻿</span></em></h1>",
                "title": "wdw"
                }
            ]
            }
    */

    /**
     * @apiExpense Expense
     * @apiVersion  1.0.0
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
                "_id": "5ea0298f2b395d093cc9b376",
                "expenseId": "stjcwBEaq",
                "__v": 0,
                "created": "2020-04-22T11:25:03.000Z",
                "watchers": [
                "Gaurav Dugar (gauri)"
                ],
                "assignee": "Gaurav Dugar (gauri)",
                "reporter": "Pragati Dugar (prags)",
                "status": "In Progress",
                "description": "<h1>sf<em><u> some thing here </u></em></h1>",
                "title": "sfssada d  s d fd"
            }
        }
    */

     /**
     * @apiExpense Expense
     * @apiVersion  1.0.0
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
     * @apiExpense Expense
     * @apiVersion  1.0.0
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
                "_id": "5ea029cd2b395d093cc9b377",
                "expenseId": "rWm7i0ApM",
                "__v": 0,
                "created": "2020-04-22T11:26:05.000Z",
                "watchers": [
                "Gaurav Dugar (gauri)"
                ],
                "assignee": "Gaurav Dugar (gauri)",
                "reporter": "Pragati Dugar (prags)",
                "status": "Not picked",
                "description": "<p>Edited Description here</p>",
                "title": "Edited Expense "
            }
        }
    */

     /**
     * @apiExpense Expense
     * @apiVersion  1.0.0
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
                "expenseId": "Qj2dU-1MV",
                "_id": "5ea325135291094744d9a0a0",
                "created": "2020-04-24T17:42:43.000Z",
                "watchers": [],
                "assignee": "Pragati Dugar (prags)",
                "reporter": "lisa anchalia (lisa)",
                "status": "Open",
                "description": "",
                "title": "Socket Expense "
            }
        }
    */
    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}