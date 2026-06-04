import db from "../config/db.js";

// LOGIN
export const login = async (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM Users
    WHERE username = ? AND password = ?
  `;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Login failed",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: result[0],
    });
  });
};
export const register = async (req, res) => {
  const { username, password, dob } = req.body;
  const checkQuery = `
    SELECT * FROM Users
    WHERE username = ?
  `;

  db.query(checkQuery, [username], (checkErr, checkResult) => {
    if (checkErr) {
      console.log(checkErr);

      return res.status(500).json({
        success: false,
        message: "Registration failed",
      });
    }

    if (checkResult.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    const insertQuery = `
      INSERT INTO Users(username, password, dob)
      VALUES (?, ?, ?)
    `;

    db.query(
      insertQuery,
      [username, password, dob],
      (insertErr, result) => {
        if (insertErr) {
          console.log(insertErr);

          return res.status(500).json({
            success: false,
            message: "Registration failed",
          });
        }

        return res.status(201).json({
          success: true,
          message: "User registered successfully",
          userId: result.insertId,
        });
      }
    );
  });
};