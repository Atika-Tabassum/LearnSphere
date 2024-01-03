const pool = require("../../db");

const createError = require("http-errors");

const getUsers = async (req, res, next) => {
  // console.log(req.body.id);
  try {
    console.log("at post");
    const user_type = req.body.user_type;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // inserting data into User table
    const newUser = await pool.query(
      'INSERT INTO  "User" (name,email,password,user_type) VALUES($1,$2,$3,$4) RETURNING *',
      [name, email, password, user_type]
    );

    // Retrieve the user's profile from the database

    // Redirect the user to the /myprofile page with the user's profile data
    const uid = newUser.rows[0].id;

    if (user_type === "Student") {
      const level = req.body.level;
      await pool.query(
        'INSERT INTO Student ("class",user_id) VALUES ($1, $2)',
        [level, uid]
      );
    } else {
      const educational_qualifications = req.body.educational_qualifications;
      await pool.query(
        "INSERT INTO Teacher (educational_qualifications, user_id) VALUES ($1, $2)",
        [educational_qualifications, uid]
      );
    }

    //    backticks (``) for template literals to allow variable interpolation
    res.redirect(`/signup/${uid}/myprofile`);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const users = await pool.query('SELECT * FROM "User" WHERE id=$1 ', [id]);
    res.status(200).json({ message: "user is returned", data: users.rows });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = { getUsers, getProfile };
