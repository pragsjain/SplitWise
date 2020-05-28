define({ "api": [
  {
    "group": "Expense",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/expenses/create",
    "title": "Create Expense",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"All Expense Details Found\",\n   \"status\": 200,\n   \"data\": {\n       \"__v\": 0,\n       \"expenseId\": \"q3P7Q8w1C\",\n       \"expenseName\": \"Adventure Sports\",\n       \"amount\": 10000,\n       \"groupId\": \"nXSO1O5ZG\",\n       \"addedOn\": \"2020-05-27T17:30:30.190Z\",\n       \"addedBy\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n       \"_id\": \"5ecea38fdcf1411cf7b866d3\",\n       \"expenseHistory\": [\n       {\n           \"expenseHistoryNotesBy\": \"Pragati Dugar (pragsjainprags@gmail.com) created expense 'Adventure Sports'\"\n       }\n       ],\n       \"splitOption\": \"equal\",\n       \"expenseMembers\": [\n       {\n           \"owedShare\": 3333.3333333333335,\n           \"isOwer\": true,\n           \"paidShare\": 10000,\n           \"isSolePayer\": true,\n           \"isMultiplePayer\": false,\n           \"userId\": \"KwMD65RIY\",\n           \"firstName\": \"Pragati\",\n           \"lastName\": \"Dugar\",\n           \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n           \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n           \"userName\": \"prags\",\n           \"mobileNo\": \"\",\n           \"email\": \"pragsjainprags@gmail.com\",\n           \"createdOn\": \"2020-05-26T12:21:04.000Z\"\n       },\n       {\n           \"owedShare\": 3333.3333333333335,\n           \"isOwer\": true,\n           \"paidShare\": 0,\n           \"isSolePayer\": false,\n           \"isMultiplePayer\": false,\n           \"userId\": \"kLvhBFqEt\",\n           \"firstName\": \"Khushi\",\n           \"lastName\": \"Dugar\",\n           \"fullName\": \"Khushi Dugar (khushidugar@gmail.com)\",\n           \"password\": \"$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976\",\n           \"userName\": \"khushi\",\n           \"mobileNo\": \"\",\n           \"email\": \"khushidugar@gmail.com\",\n           \"createdOn\": \"2020-05-26T12:23:45.000Z\"\n       },\n       {\n           \"owedShare\": 3333.3333333333335,\n           \"isOwer\": true,\n           \"paidShare\": 0,\n           \"isSolePayer\": false,\n           \"isMultiplePayer\": false,\n           \"userId\": \"iwtLFJxMJ\",\n           \"firstName\": \"Yuvraj\",\n           \"lastName\": \"Dugar\",\n           \"fullName\": \"Yuvraj Dugar (yuvrajdugar@gmail.com)\",\n           \"password\": \"$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK\",\n           \"userName\": \"yuvraj\",\n           \"mobileNo\": \"\",\n           \"email\": \"yuvrajdugar@gmail.com\",\n           \"createdOn\": \"2020-05-26T12:24:25.000Z\"\n       }\n       ]\n   }\n   }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "Expense",
    "name": "GetApiV1ExpensesCreate"
  },
  {
    "group": "Expense",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/expenses/:expenseId/edit",
    "title": "Edit Expense",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>Expense Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Expense Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ecea38fdcf1411cf7b866d3\",\n        \"expenseId\": \"q3P7Q8w1C\",\n        \"expenseName\": \"Adventure Sports\",\n        \"amount\": 10000,\n        \"groupId\": \"nXSO1O5ZG\",\n        \"addedOn\": \"2020-05-27T17:30:30.190Z\",\n        \"addedBy\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n        \"__v\": 0,\n        \"updatedBy\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n        \"updatedOn\": \"2020-05-27T17:32:14.893Z\",\n        \"expenseHistory\": [\n        {\n            \"expenseHistoryNotesBy\": \"Pragati Dugar (pragsjainprags@gmail.com) created expense 'Adventure Sports'\"\n        },\n        {\n            \"expenseHistoryNotesBy\": \"Pragati Dugar (pragsjainprags@gmail.com) updated expense 'Adventure Sports'\",\n            \"expenseHistoryNotes\": [\n            \"Khushi Dugar (khushidugar@gmail.com) is removed from Expense\",\n            \"Pragati Dugar (pragsjainprags@gmail.com) share changed from Rs.3333.33 to Rs.6000.00\",\n            \"Yuvraj Dugar (yuvrajdugar@gmail.com) share changed from Rs.3333.33 to Rs.4000.00\"\n            ]\n        }\n        ],\n        \"splitOption\": \"percentage\",\n        \"expenseMembers\": [\n        {\n            \"createdOn\": \"2020-05-26T12:21:04.000Z\",\n            \"email\": \"pragsjainprags@gmail.com\",\n            \"mobileNo\": \"\",\n            \"userName\": \"prags\",\n            \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n            \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"lastName\": \"Dugar\",\n            \"firstName\": \"Pragati\",\n            \"userId\": \"KwMD65RIY\",\n            \"isMultiplePayer\": false,\n            \"isSolePayer\": true,\n            \"paidShare\": 10000,\n            \"isOwer\": true,\n            \"owedShare\": 6000,\n            \"owedPercentageShare\": 60\n        },\n        {\n            \"createdOn\": \"2020-05-26T12:24:25.000Z\",\n            \"email\": \"yuvrajdugar@gmail.com\",\n            \"mobileNo\": \"\",\n            \"userName\": \"yuvraj\",\n            \"password\": \"$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK\",\n            \"fullName\": \"Yuvraj Dugar (yuvrajdugar@gmail.com)\",\n            \"lastName\": \"Dugar\",\n            \"firstName\": \"Yuvraj\",\n            \"userId\": \"iwtLFJxMJ\",\n            \"isMultiplePayer\": false,\n            \"isSolePayer\": false,\n            \"paidShare\": 0,\n            \"isOwer\": true,\n            \"owedShare\": 4000,\n            \"owedPercentageShare\": 40\n        }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "Expense",
    "name": "GetApiV1ExpensesExpenseidEdit"
  },
  {
    "group": "Expense",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/expenses/:groupId/all",
    "title": "Get all expenses for a Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Expense Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"count\": 2,\n        \"expenseList\": [\n        {\n            \"expenseId\": \"zTU_G-M3f\",\n            \"expenseName\": \"Magic show Tickets\",\n            \"amount\": 900,\n            \"groupId\": \"nXSO1O5ZG\",\n            \"addedOn\": \"2020-05-26T12:26:19.617Z\",\n            \"addedBy\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"expenseHistory\": [\n            {\n                \"expenseHistoryNotesBy\": \"Pragati Dugar (pragsjainprags@gmail.com) created expense 'Magic show Tickets'\"\n            }\n            ],\n            \"splitOption\": \"equal\",\n            \"expenseMembers\": [\n            {\n                \"owedShare\": 300,\n                \"isOwer\": true,\n                \"paidShare\": 900,\n                \"isSolePayer\": true,\n                \"isMultiplePayer\": false,\n                \"userId\": \"KwMD65RIY\",\n                \"firstName\": \"Pragati\",\n                \"lastName\": \"Dugar\",\n                \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n                \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n                \"userName\": \"prags\",\n                \"mobileNo\": \"\",\n                \"email\": \"pragsjainprags@gmail.com\",\n                \"createdOn\": \"2020-05-26T12:21:04.000Z\"\n            },\n            {\n                \"owedShare\": 300,\n                \"isOwer\": true,\n                \"paidShare\": 0,\n                \"isSolePayer\": false,\n                \"isMultiplePayer\": false,\n                \"userId\": \"kLvhBFqEt\",\n                \"firstName\": \"Khushi\",\n                \"lastName\": \"Dugar\",\n                \"fullName\": \"Khushi Dugar (khushidugar@gmail.com)\",\n                \"password\": \"$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976\",\n                \"userName\": \"khushi\",\n                \"mobileNo\": \"\",\n                \"email\": \"khushidugar@gmail.com\",\n                \"createdOn\": \"2020-05-26T12:23:45.000Z\"\n            },\n            {\n                \"owedShare\": 300,\n                \"isOwer\": true,\n                \"paidShare\": 0,\n                \"isSolePayer\": false,\n                \"isMultiplePayer\": false,\n                \"userId\": \"iwtLFJxMJ\",\n                \"firstName\": \"Yuvraj\",\n                \"lastName\": \"Dugar\",\n                \"fullName\": \"Yuvraj Dugar (yuvrajdugar@gmail.com)\",\n                \"password\": \"$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK\",\n                \"userName\": \"yuvraj\",\n                \"mobileNo\": \"\",\n                \"email\": \"yuvrajdugar@gmail.com\",\n                \"createdOn\": \"2020-05-26T12:24:25.000Z\"\n            }\n            ]\n        },\n        {\n            \"expenseId\": \"TtkQyc3vp\",\n            \"expenseName\": \"Dinner at Lalit Palace\",\n            \"amount\": 2000,\n            \"groupId\": \"nXSO1O5ZG\",\n            \"addedOn\": \"2020-05-26T12:27:19.377Z\",\n            \"addedBy\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"expenseHistory\": [\n            {\n                \"expenseHistoryNotesBy\": \"Pragati Dugar (pragsjainprags@gmail.com) created expense 'Dinner at Lalit Palace'\"\n            }\n            ],\n            \"splitOption\": \"equal\",\n            \"expenseMembers\": [\n            {\n                \"owedShare\": 666.6666666666666,\n                \"isOwer\": true,\n                \"paidShare\": 2000,\n                \"isSolePayer\": true,\n                \"isMultiplePayer\": false,\n                \"userId\": \"KwMD65RIY\",\n                \"firstName\": \"Pragati\",\n                \"lastName\": \"Dugar\",\n                \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n                \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n                \"userName\": \"prags\",\n                \"mobileNo\": \"\",\n                \"email\": \"pragsjainprags@gmail.com\",\n                \"createdOn\": \"2020-05-26T12:21:04.000Z\"\n            },\n            {\n                \"owedShare\": 666.6666666666666,\n                \"isOwer\": true,\n                \"paidShare\": 0,\n                \"isSolePayer\": false,\n                \"isMultiplePayer\": false,\n                \"userId\": \"kLvhBFqEt\",\n                \"firstName\": \"Khushi\",\n                \"lastName\": \"Dugar\",\n                \"fullName\": \"Khushi Dugar (khushidugar@gmail.com)\",\n                \"password\": \"$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976\",\n                \"userName\": \"khushi\",\n                \"mobileNo\": \"\",\n                \"email\": \"khushidugar@gmail.com\",\n                \"createdOn\": \"2020-05-26T12:23:45.000Z\"\n            },\n            {\n                \"owedShare\": 666.6666666666666,\n                \"isOwer\": true,\n                \"paidShare\": 0,\n                \"isSolePayer\": false,\n                \"isMultiplePayer\": false,\n                \"userId\": \"iwtLFJxMJ\",\n                \"firstName\": \"Yuvraj\",\n                \"lastName\": \"Dugar\",\n                \"fullName\": \"Yuvraj Dugar (yuvrajdugar@gmail.com)\",\n                \"password\": \"$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK\",\n                \"userName\": \"yuvraj\",\n                \"mobileNo\": \"\",\n                \"email\": \"yuvrajdugar@gmail.com\",\n                \"createdOn\": \"2020-05-26T12:24:25.000Z\"\n            }\n            ]\n        }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "Expense",
    "name": "GetApiV1ExpensesGroupidAll"
  },
  {
    "group": "Expense",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/expenses/view/:expenseId",
    "title": "Get Expense Detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>Expense Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Expense Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ecd0ac7dcf1411cf7b866bd\",\n        \"expenseId\": \"zTU_G-M3f\",\n        \"expenseName\": \"Magic show Tickets\",\n        \"amount\": 900,\n        \"groupId\": \"nXSO1O5ZG\",\n        \"addedOn\": \"2020-05-26T12:26:19.617Z\",\n        \"addedBy\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n        \"__v\": 0,\n        \"expenseHistory\": [\n        {\n            \"expenseHistoryNotesBy\": \"Pragati Dugar (pragsjainprags@gmail.com) created expense 'Magic show Tickets'\"\n        }\n        ],\n        \"splitOption\": \"equal\",\n        \"expenseMembers\": [\n        {\n            \"createdOn\": \"2020-05-26T12:21:04.000Z\",\n            \"email\": \"pragsjainprags@gmail.com\",\n            \"mobileNo\": \"\",\n            \"userName\": \"prags\",\n            \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n            \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"lastName\": \"Dugar\",\n            \"firstName\": \"Pragati\",\n            \"userId\": \"KwMD65RIY\",\n            \"isMultiplePayer\": false,\n            \"isSolePayer\": true,\n            \"paidShare\": 900,\n            \"isOwer\": true,\n            \"owedShare\": 300\n        },\n        {\n            \"createdOn\": \"2020-05-26T12:23:45.000Z\",\n            \"email\": \"khushidugar@gmail.com\",\n            \"mobileNo\": \"\",\n            \"userName\": \"khushi\",\n            \"password\": \"$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976\",\n            \"fullName\": \"Khushi Dugar (khushidugar@gmail.com)\",\n            \"lastName\": \"Dugar\",\n            \"firstName\": \"Khushi\",\n            \"userId\": \"kLvhBFqEt\",\n            \"isMultiplePayer\": false,\n            \"isSolePayer\": false,\n            \"paidShare\": 0,\n            \"isOwer\": true,\n            \"owedShare\": 300\n        },\n        {\n            \"createdOn\": \"2020-05-26T12:24:25.000Z\",\n            \"email\": \"yuvrajdugar@gmail.com\",\n            \"mobileNo\": \"\",\n            \"userName\": \"yuvraj\",\n            \"password\": \"$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK\",\n            \"fullName\": \"Yuvraj Dugar (yuvrajdugar@gmail.com)\",\n            \"lastName\": \"Dugar\",\n            \"firstName\": \"Yuvraj\",\n            \"userId\": \"iwtLFJxMJ\",\n            \"isMultiplePayer\": false,\n            \"isSolePayer\": false,\n            \"paidShare\": 0,\n            \"isOwer\": true,\n            \"owedShare\": 300\n        }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "Expense",
    "name": "GetApiV1ExpensesViewExpenseid"
  },
  {
    "group": "Expense",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/expenses/view/:expenseId/delete",
    "title": "Delete Expense",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>Expense Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Expense is Deleted Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "Expense",
    "name": "GetApiV1ExpensesViewExpenseidDelete"
  },
  {
    "group": "Group",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/groups/create",
    "title": "Create Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Group Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"groupId\": \"0PTQa_DQq\",\n        \"created\": \"2020-05-27T17:04:28.000Z\",\n        \"_id\": \"5ece9d9cdcf1411cf7b866d2\",\n        \"groupMembers\": [\n        {\n            \"userId\": \"KwMD65RIY\",\n            \"firstName\": \"Pragati\",\n            \"lastName\": \"Dugar\",\n            \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n            \"userName\": \"prags\",\n            \"mobileNo\": \"\",\n            \"email\": \"pragsjainprags@gmail.com\",\n            \"createdOn\": \"2020-05-26T12:21:04.000Z\"\n        },\n        {\n            \"userId\": \"kLvhBFqEt\",\n            \"firstName\": \"Khushi\",\n            \"lastName\": \"Dugar\",\n            \"fullName\": \"Khushi Dugar (khushidugar@gmail.com)\",\n            \"password\": \"$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976\",\n            \"userName\": \"khushi\",\n            \"mobileNo\": \"\",\n            \"email\": \"khushidugar@gmail.com\",\n            \"createdOn\": \"2020-05-26T12:23:45.000Z\"\n        }\n        ],\n        \"groupName\": \"goa trip\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "Group",
    "name": "GetApiV1GroupsCreate"
  },
  {
    "group": "Group",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/groups/:userId/all",
    "title": "Get all groups for a User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Group Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n        \"groupId\": \"nXSO1O5ZG\",\n        \"created\": \"2020-05-26T12:24:58.000Z\",\n        \"groupMembers\": [\n            {\n            \"userId\": \"KwMD65RIY\",\n            \"firstName\": \"Pragati\",\n            \"lastName\": \"Dugar\",\n            \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n            \"userName\": \"prags\",\n            \"mobileNo\": \"\",\n            \"email\": \"pragsjainprags@gmail.com\",\n            \"createdOn\": \"2020-05-26T12:21:04.000Z\"\n            }\n            {\n            \"userId\": \"iwtLFJxMJ\",\n            \"firstName\": \"Yuvraj\",\n            \"lastName\": \"Dugar\",\n            \"fullName\": \"Yuvraj Dugar (yuvrajdugar@gmail.com)\",\n            \"password\": \"$2a$10$JRH7zpZ2wQvavz8Zg8TNjOcxoshykWcU/uC8G2mJYpz3M2nvycPPK\",\n            \"userName\": \"yuvraj\",\n            \"mobileNo\": \"\",\n            \"email\": \"yuvrajdugar@gmail.com\",\n            \"createdOn\": \"2020-05-26T12:24:25.000Z\"\n            }\n        ],\n        \"groupName\": \"Ahmedabad Trip\"\n        },\n        {\n        \"groupId\": \"7UyizcPMw\",\n        \"created\": \"2020-05-26T13:08:25.000Z\",\n        \"groupMembers\": [\n            {\n            \"userId\": \"Bt9sf2ew7\",\n            \"firstName\": \"Akshay\",\n            \"lastName\": \"Soni\",\n            \"fullName\": \"Akshay Soni (mailakkiy@gmail.com)\",\n            \"password\": \"$2a$10$1s2mIQ8m/GXA3a5FlCFxCeF6ro34AqLTPIuW0N83iM6uBpInvyS2S\",\n            \"userName\": \"akshay.soni\",\n            \"mobileNo\": \"\",\n            \"email\": \"mailakkiy@gmail.com\",\n            \"createdOn\": \"2020-05-26T13:07:40.000Z\"\n            },\n            {\n            \"userId\": \"KwMD65RIY\",\n            \"firstName\": \"Pragati\",\n            \"lastName\": \"Dugar\",\n            \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n            \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n            \"userName\": \"prags\",\n            \"mobileNo\": \"\",\n            \"email\": \"pragsjainprags@gmail.com\",\n            \"createdOn\": \"2020-05-26T12:21:04.000Z\"\n            }\n        ],\n        \"groupName\": \"Himachal Ki Masti\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "Group",
    "name": "GetApiV1GroupsUseridAll"
  },
  {
    "group": "Group",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/groups/view/:groupId",
    "title": "Get Group Detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"All Group Details Found\",\n   \"status\": 200,\n   \"data\": {\n       \"_id\": \"5ecd0a9adcf1411cf7b866bc\",\n       \"groupId\": \"nXSO1O5ZG\",\n       \"created\": \"2020-05-26T12:24:58.000Z\",\n       \"__v\": 0,\n       \"groupMembers\": [\n       {\n           \"createdOn\": \"2020-05-26T12:21:04.000Z\",\n           \"email\": \"pragsjainprags@gmail.com\",\n           \"mobileNo\": \"\",\n           \"userName\": \"prags\",\n           \"password\": \"$2a$10$S3Mkpc2diOcD3B/CBWSrxeUt/N7lzErLh7cdB7kKBvOYLV.zCZulS\",\n           \"fullName\": \"Pragati Dugar (pragsjainprags@gmail.com)\",\n           \"lastName\": \"Dugar\",\n           \"firstName\": \"Pragati\",\n           \"userId\": \"KwMD65RIY\"\n       },\n       {\n           \"createdOn\": \"2020-05-26T12:23:45.000Z\",\n           \"email\": \"khushidugar@gmail.com\",\n           \"mobileNo\": \"\",\n           \"userName\": \"khushi\",\n           \"password\": \"$2a$10$D6gZ3a5SQzivl5RUFbp5heVQJsISSjV5355Qcwxrle31QgXK9N976\",\n           \"fullName\": \"Khushi Dugar (khushidugar@gmail.com)\",\n           \"lastName\": \"Dugar\",\n           \"firstName\": \"Khushi\",\n           \"userId\": \"kLvhBFqEt\"\n       }\n       ],\n       \"groupName\": \"Ahmedabad Trip\"\n   }\n   }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "Group",
    "name": "GetApiV1GroupsViewGroupid"
  },
  {
    "group": "Group",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/groups/view/:groupId/delete",
    "title": "Delete Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Group is Deleted Successfully\",\n     \"status\": 200,\n     \"data\": {\n         \"n\": 1,\n         \"ok\": 1\n     }\n }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "Group",
    "name": "GetApiV1GroupsViewGroupidDelete"
  },
  {
    "group": "User",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkVGODdtNmNsTSIsImlhdCI6MTU5MDU5NzUxNjQxNiwiZXhwIjoxNTkwNjgzOTE2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjoiMnhBZ2pPM3RvIn0.V9uxCad_Lvh8WfNatVwARi-Iu44haAoD42v0OlaW8iM\",\n        \"userId\": \"2xAgjO3to\",\n        \"userDetails\": {\n        \"email\": \"kanchandugar@gmail.com\",\n        \"mobileNo\": \"+919568488393\",\n        \"userName\": \"kanchan\",\n        \"fullName\": \"Kanchan  Dugar (kanchandugar@gmail.com)\",\n        \"lastName\": \"Dugar\",\n        \"firstName\": \"Kanchan \",\n        \"userId\": \"2xAgjO3to\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "object",
            "optional": false,
            "field": "myError",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"Wrong Password.Login Failed\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "User Sign Up",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date of the user creation. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5ece95afdcf1411cf7b866cf\",\n        \"createdOn\": \"2020-05-27T16:30:39.000Z\",\n        \"email\": \"kanchandugar@gmail.com\",\n        \"mobileNo\": \"+919568488393\",\n        \"userName\": \"kanchan\",\n        \"fullName\": \"Kanchan  Dugar (kanchandugar@gmail.com)\",\n        \"lastName\": \"Dugar\",\n        \"firstName\": \"Kanchan \",\n        \"userId\": \"2xAgjO3to\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "object",
            "optional": false,
            "field": "myError",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"User Already Present With this userName\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "User",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "User logout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>auth-token of the user. (auth headers) (required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVCJ9.eyJqd3RpZCI6Imk2ejAwUkJWcyIsImlhdCI6MTU4Nzc0ODA2MDA3MywiZXhwIjoxNTg3ODM0NDYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibGlzYSIsImZ1bGxOYW1lIjoibGlzYSBhbmNoYWxpYSAobGlzYSkiLCJsYXN0TmFtZSI6ImFuY2hhbGlhIiwiZmlyc3ROYW1lIjoibGlzYSIsInVzZXJJZCI6IjZCOVBMeGdvSyJ9fQ.iqXZDKNfG-kHZLVSPJLJpRWw7IBezEBtbKFrnYyOQPg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Auth is Deleted Successfully\",\n   \"status\": 200,\n   \"data\": {\n       \"n\": 1,\n       \"ok\": 1\n   }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersUseridDelete"
  }
] });
