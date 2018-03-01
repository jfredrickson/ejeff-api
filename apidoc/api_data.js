define({ "api": [
  {
    "type": "post",
    "url": "/token",
    "title": "Get authentication token",
    "name": "PostToken",
    "group": "Token",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>HTTP basic auth data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HeaderExample",
          "content": "\"Authorization: Basic Zm9vYmFyOmZvb2Jhcg==\"",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"abc123\",\n  \"user\": {\n    \"_id\": 1,\n    \"username\": \"foobar\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/tokensController.js",
    "groupTitle": "Token"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "name": "PostUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Unique username</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for the new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestExample",
          "content": "{\n  \"username\": \"foobar\",\n  \"password\": \"foobar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>New username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 201 Created\n{\n  \"username\": \"foobar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersController.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:userId",
    "title": "Update user",
    "name": "PutUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Updated username</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Updated password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestExample",
          "content": "{\n  \"username\": \"newusername\",\n  \"password\": \"newpassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersController.js",
    "groupTitle": "Users"
  }
] });
