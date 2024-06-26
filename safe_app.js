const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
// Display all records
app.get('/', (req, res) => {
    let message = req.query.message;
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('index', { users: result, message: message });
    });
});

//add
app.post('/add', (req, res) => {
    let record = { name: req.body.name, email: req.body.email };
    var name = req.body.name;
    var email = req.body.email;
    // Vulnerable to SQL Injection
    let sql = "INSERT INTO users(name, email) VALUES ('" + name + "','" + email + "')";
    db.query(sql, record, (err, result) => {
        if (err) throw err;
        res.redirect("/?message=" + "User added successfully");
    });
});

// Update a record
app.post('/update/:id', (req, res) => {
    let sql = `UPDATE users SET name='${req.body.name}', email='${req.body.email}' WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete a record
app.get('/delete/:id', (req, res) => {
    let sql = `DELETE FROM users WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});