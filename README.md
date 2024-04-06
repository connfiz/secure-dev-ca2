# Node.js MySQL CRUD Application

This is a simple Node.js application that performs CRUD operations on a MySQL database.

## Environment Requirements

- Node.js: This application requires Node.js to run. 
- MySQL: This application uses a MySQL database. 

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Set up your MySQL database and update the connection details in `safe_app.js`.
5. Run `node safe_app.js` to start the application.

## Usage

- POST `/add`: Adds a new user. The request body should be a JSON object with `name` and `email` properties.
- GET `/users`: Returns a list of all users.
