
const groupController = require("./../../app/controllers/groupController");
const appConfig = require("./../../config/appConfig")
const auth =require("./../middlewares/auth")


let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/groups`;

    // defining routes.

    app.get(baseUrl+'/all',auth.isAuthenticated,groupController.getAllGroup)

    app.get(baseUrl+'/view/:groupId',auth.isAuthenticated,groupController.viewByGroupId);

    app.post(baseUrl+'/:groupId/delete',auth.isAuthenticated,groupController.deleteGroup);

    app.put(baseUrl+'/:groupId/edit',auth.isAuthenticated,groupController.editGroup);

    app.post(baseUrl+'/create',auth.isAuthenticated,groupController.createGroup);

     /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {get} /api/v1/groups/all Get all groups
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
                "groupId": "stjcwBEaq",
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
                "groupId": "XKpilZuU7",
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
     * @apiGroup Group
     * @apiVersion  1.0.0
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
                "_id": "5ea0298f2b395d093cc9b376",
                "groupId": "stjcwBEaq",
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
     * @apiGroup Group
     * @apiVersion  1.0.0
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
     * @apiVersion  1.0.0
     * @api {get} /api/v1/groups/:groupId/edit Edit Group
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
                "_id": "5ea029cd2b395d093cc9b377",
                "groupId": "rWm7i0ApM",
                "__v": 0,
                "created": "2020-04-22T11:26:05.000Z",
                "watchers": [
                "Gaurav Dugar (gauri)"
                ],
                "assignee": "Gaurav Dugar (gauri)",
                "reporter": "Pragati Dugar (prags)",
                "status": "Not picked",
                "description": "<p>Edited Description here</p>",
                "title": "Edited Group "
            }
        }
    */

     /**
     * @apiGroup Group
     * @apiVersion  1.0.0
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
                "groupId": "Qj2dU-1MV",
                "_id": "5ea325135291094744d9a0a0",
                "created": "2020-04-24T17:42:43.000Z",
                "watchers": [],
                "assignee": "Pragati Dugar (prags)",
                "reporter": "lisa anchalia (lisa)",
                "status": "Open",
                "description": "",
                "title": "Socket Group "
            }
        }
    */
    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}