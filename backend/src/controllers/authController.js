import db from "../config/db.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  res.json({
    success: true,
    message: "Login request received",
  });
};

export const register = async (req, res) => {
  const { username, password, dob } = req.body;

  const query = `
    INSERT INTO Users(username, password, dob)
    VALUES (?, ?, ?)
  `;

  db.query(query, [username, password, dob], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Registration failed",
      });
    }

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  });
};