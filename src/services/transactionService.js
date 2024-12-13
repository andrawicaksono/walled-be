const createTransaction = (transactionRepository) => async (data) => {
  try {
    const [newTransaction, err] = await transactionRepository.createTransaction(
      data
    );
    if (err) throw err;

    return [newTransaction, null];
  } catch (err) {
    return [null, err];
  }
};

const getAllUserTransactions = (transactionRepository) => async (userId) => {
  try {
    const [transactions, err] =
      await transactionRepository.findAllUserTransactions(userId);
    if (err) throw err;

    return [transactions, null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (transactionRepository) => {
  return {
    createTransaction: createTransaction(transactionRepository),
    getAllUserTransactions: getAllUserTransactions(transactionRepository),
  };
};
