<<<<<<< HEAD
const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected...');
});

app.post('/add', (req, res) => {
    let data = {name: req.body.name, email: req.body.email};
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send('User added...');
    });
});

app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

app.put('/update/:id', (req, res) => {
    let sql = `UPDATE users SET name = '${req.body.name}', email = '${req.body.email}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('User updated...');
    });
});

app.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('User deleted...');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
=======
const express = require('express');
const mysql = require('mysql');
>>>>>>> e70e91fb76b53183f8017b874761edab86b62478
