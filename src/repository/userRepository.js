const { AppError } = require("../utils/error");

const findUserById = (db) => async (id) => {
  const query = "SELECT * FROM users WHERE id = $1";

  try {
    const result = await db.query(query, [id]);

    if (result.rowCount === 0) throw new AppError("User not found", 404);

    return [result.rows[0], null];
  } catch (err) {
    return [null, err];
  }
};

const findUserByEmail = (db) => async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";

  try {
    const result = await db.query(query, [email]);

    if (result.rowCount === 0) throw new AppError("User not found", 404);

    return [result.rows[0], null];
  } catch (err) {
    return [null, err];
  }
};

const createUser = (db) => async (data) => {
  const query =
    "INSERT INTO users (full_name, email, password, phone_number, account_no) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  try {
    const result = await db.query(query, [
      data.fullName,
      data.email,
      data.password,
      data.phoneNumber,
      data.accountNo,
    ]);

    return [result.rows[0], null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (db) => {
  return {
    findUserById: findUserById(db),
    findUserByEmail: findUserByEmail(db),
    createUser: createUser(db),
  };
};
