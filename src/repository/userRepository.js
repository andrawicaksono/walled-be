const { AppError } = require("../utils/error");

const getUserById = (db) => async (id) => {
  const query = "SELECT * FROM users WHERE id = $1";

  try {
    const result = await db.query(query, [id]);

    if (result.rowCount === 0) throw new AppError("User not found", 404);

    return [result.rows[0], null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (db) => {
  return {
    getUserById: getUserById(db),
  };
};
