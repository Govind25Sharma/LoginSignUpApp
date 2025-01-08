Login and Signup Web Application

This is a web application that allows users to sign up and log in. It features user authentication and uses MongoDB Atlas as the database for storing user data. The application is built with React.js for the frontend, Node.js for the backend, and Express.js as the server framework.

Features

User Registration:

Users can sign up by providing their first name, last name, email, password, and phone number.
Validates that all fields are filled before submission.
User Login:
    Users can log in using their email and password.
    Displays an error message if login credentials are incorrect.
Welcome Page:
    Displays a welcome message after successful login.

Tech Stack

Frontend

React.js: For building the user interface.
CSS Modules: For styling components.

Backend

Node.js: For creating the server.
Express.js: For handling API requests.

Database

MongoDB Atlas: A cloud-based NoSQL database to store user data.
Prerequisites

Ensure the following are installed on your system:

Node.js (v14+)
    npm (Node Package Manager)
    MongoDB Atlas Account (for database configuration)

Project Setup and Installation

1. Clone the Repository
    git clone <repository-url>
    cd project
2. Set Up the Backend
    Navigate to the backend directory:
    cd backend

Install dependencies:
    npm install
    Create a .env file in the backend directory and add your MongoDB Atlas connection string:
    MONGO_URI=your_mongodb_connection_string

Start the backend server:
    npm start

3. Set Up the Frontend
    Navigate to the frontend directory:
    cd client

Install dependencies:
    npm install

Start the React development server:
    npm start
    Usage

Sign Up
    Visit the signup page at http://localhost:3000/accounts/signup.
    Fill in the form with the following fields:
    First Name
    Last Name
    Email
    Password
    Phone Number
    Click the Register button to create a new account.

Log In
    Visit the login page at http://localhost:3000/accounts/login.
    Enter your registered email and password.
    Click the Login button to access the welcome page.

API Endpoints

POST /register
Description: Registers a new user in the database.
Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "mobile": "1234567890",
  "email": "john@example.com",
  "password": "password123"
}
Response:
201 Created: User registered successfully.
400 Bad Request: Missing fields or invalid input.
POST /login
Description: Logs in a user.
Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}
Response:
200 OK: Login successful.
401 Unauthorized: Invalid email or password.

MongoDB Atlas Configuration

This project uses MongoDB Atlas for the database. Follow these steps to configure it:

Create an account on MongoDB Atlas.
Set up a new cluster and create a database.
Obtain the connection string and replace your_mongodb_connection_string in the .env file.
