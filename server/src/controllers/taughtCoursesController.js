const pool = require("../../db");

const createError = require("http-errors");
const getCourses = async (req, res, next) => {
    try {
      const id = req.params.userId;
      console.log(id);
      const t_id = await pool.query('SELECT t.* FROM teacher t JOIN \"User\" u ON t.user_id=u.id  WHERE id=$1 ', [id]);
      const courses=await pool.query('SELECT * FROM course where teacher_id=$1',[t_id.rows[0].teacher_id]);
      res.status(200).json({ message: "user is returned", data: courses.rows});
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  };

  module.exports = { getCourses };