const createTransaction = (db) => async (data) => {
  const query =
    "INSERT INTO transactions (user_id, type, from_to, description, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  try {
    const result = await db.query(query, [
      data.userId,
      data.type,
      data.fromTo,
      data.description,
      data.amount,
    ]);

    return [result.rows[0], null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (db) => {
  return {
    createTransaction: createTransaction(db),
  };
};
