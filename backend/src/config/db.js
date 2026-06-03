import mysql from 'mysql2';

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kavya@2023',
    database : 'ticket'
});

db.connect((err) => {

    if (err) {
        console.error("❌ Database connection failed");
        console.error(err);
        return;
    }

    console.log("✅ Database connected successfully");

});
export default db;