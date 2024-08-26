import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack)
        return
    }
    console.log('Connected to the database.')
    const newUsersTable = `CREATE TABLE IF NOT EXISTS userauths (
        userId INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(45) NOT NULL,
        lastName VARCHAR(45) NOT NULL,
        mobile VARCHAR(45) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        isLoggedIn TINYINT NOT NULL DEFAULT 0,
        hashedEmail VARCHAR(255),
        forgotPassToken VARCHAR(255),
        createdAt DATETIME DEFAULT NULL
    );`
    connection.query(newUsersTable,(err)=> {
        if (err) throw err
        // console.log('Users table ready...')
    })
})

export default connection