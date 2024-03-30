# Node.js MySQL CRUD Application

This is a simple Node.js application that performs CRUD operations on a MySQL database.

## Environment Requirements

- Node.js: This application requires Node.js to run. 
- MySQL: This application uses a MySQL database. 

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Set up your MySQL database and update the connection details in `app.js`.
5. Run `node app.js` to start the application.

## Environment Variables

You should create a `.env` file in your project root and set the following variables:

- `DB_HOST`: Your database host (default is 'localhost').
- `DB_USER`: Your database user (default is 'root').
- `DB_PASS`: Your database password.
- `DB_NAME`: The name of your database.

## Usage

- POST `/add`: Adds a new user. The request body should be a JSON object with `name` and `email` properties.
- GET `/users`: Returns a list of all users.
