const pool = require("../../db");

const createError = require("http-errors");
const getUser = async (req, res, next) => {
    try {
      const id = req.params.userId;
      console.log(id);
      const user = await pool.query('SELECT * FROM "User" WHERE id=$1 ', [id]);
      res.status(200).json({ message: "user is returned", data: user.rows});
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  };

  module.exports = { getUser };