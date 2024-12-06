# User Registration Endpoint

## POST /register

### Description

This endpoint allows a new user to register by providing a username, email, and password.

### Request Body

The request must include a JSON object with the following fields:

- `username`: A string between 3 and 20 characters (required)
- `email`: A valid email address (required)
- `password`: A string between 6 and 12 characters (required)

**Example:**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Response Body

#### 201 Created: the user is created successfully

**Example**

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "username": "john_deo",
    "email": "john@example.com"
  }
}
```

#### 404 Bad Response: invalid or missing field

**Example**

```json
{
  "errors": [
    {
      "msg": "Username is required",
      "param": "username",
      "location": "body"
    },
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```
