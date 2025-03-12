API Documentation

This API provides authentication and product-related services as part of a microservices-based application.

Technologies Used

1. Node.js
2. Express.js
3. MongoDB (if applicable
4. JWT for authentication

Installation
1. Clone the repository
2. Install dependencies
3. Start the Authentication Service
4. Start the Product Service

API Endpoints

Authentication Service
The authentication service allows users to register, log in, and access protected routes.

Register a New User
- Endpoint: POST /register
- Request Body -> { "username": "example_user", "password": "secure_password" }
- Response -> { "message": "User registered successfully" }

How it Works:
- The server receives the request and validates the input.
- The password is hashed for security before storing it in the database.
- A success message is returned if the registration is successful.

User Login
Authenticates a user and returns a JWT token for authorization.

- Endpoint: POST /login
- Request Body -> { "username": "example_user", "password": "secure_password" }
- Response ->  { "token": "your_jwt_token" }

How it Works:
- The server checks if the username exists in the database.
- The entered password is compared with the stored hashed password.
- If authentication is successful, a JWT token is generated and sent to the user.
- This token must be used in protected routes.

Protected Route
Provides access to specific users who are authenticated.

- Endpoint: GET /protected
- Headers:
- Response: {"id":1,"name":"Espresso","price":3,"description":"Strong and bold single shot of coffee"}

How it Works:
- The server verifies the provided JWT token.
- If valid, the user is granted access to the protected content.

Product Service
The product service handles retrieving product information for a coffee shop.

Fetch All Products
- Endpoint: GET /products
- Response:
[
    { "id": 1, "name": "Espresso", "price": 3.00, "description": "Strong and bold single shot of coffee" },
    { "id": 2, "name": "Latte", "price": 4.50, "description": "Creamy espresso with steamed milk" }
]

How it Works:
-The server fetches the list of products from a predefined array.
-The products are returned as a JSON response.

Testing the API
Use Postman or cURL to test the API endpoints.

1. Postman
-Test API endpoints by sending requests and viewing responses.

2. cURL
- Command-line tool for making API requests:

Features of This API
- Provides secure authentication using JWT.
- Allows user registration and login.
- Grants access to protected routes.
- Fetches and displays coffee shop products in the product service.

CONTRIBUTORS:

VALENZUELA, Sharmaine Hannah P.
VIZCARRA, Charles Justin R.
