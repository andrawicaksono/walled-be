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

module.exports = (transactionRepository) => {
  return {
    createTransaction: createTransaction(transactionRepository),
  };
};
