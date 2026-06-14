import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kavya@2023',
    database: 'online'
});

db.connect((err) => {
    if(err){
        console.log(err);
    }
    console.log("Database is connected successfully!!!");
});

export default db;