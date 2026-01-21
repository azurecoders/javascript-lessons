import { pool } from "../config/db.js";

export const fetchAllUsers = async (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Users Fetched Successfully",
      data: results.rows,
    });
  });
};

export const createNewUser = async (req, res) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log("Results: ", results);

      res.status(201).json({
        success: true,
        message: `User added with ID: ${results.rows[0].id}`,
        data: results.rows[0],
      });
    },
  );
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;

  pool.query("SELECT * FROM users WHERE id=$1", [id], (error, results) => {
    if (error) {
      res.status(404).json({
        success: false,
        message: "Some error occured",
        stack: error,
      });
    }

    console.log(results.rows);

    if (results.rows.length === 0) {
      res.status(200).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Fetched Successfully",
      data: results.rows[0],
    });
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  // Number("1") -> string
  // 1 -> number

  pool.query(
    "UPDATE users SET name = $1, email= $2 WHERE id = $3 RETURNING *;",
    [name, email, Number(id)],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json({
        success: true,
        message: "User Updated Successfully",
        data: results.rows[0],
      });
    },
  );
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *;",
    [Number(id)],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
        data: results.rows[0],
      });
    },
  );
};
