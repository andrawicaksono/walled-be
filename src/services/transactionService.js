const { AppError } = require("../utils/error");

const createTransaction =
  (transactionRepository, userRepository) => async (data) => {
    try {
      const [user, errUser] = await userRepository.findUserById(data.userId);
      if (errUser) throw errUser;
      if (!user) throw new AppError("User not found", 400);

      const [newTransaction, errNewTransaction] =
        await transactionRepository.createTransaction(data);
      if (errNewTransaction) throw errNewTransaction;

      const updateBalanceData = {
        id: data.userId,
        balance:
          data.type === "c"
            ? user.balance + data.amount
            : user.balance - data.amount,
      };

      const [_, errUpdatedUser] = await userRepository.updateBalance(
        updateBalanceData
      );

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

module.exports = (transactionRepository, userRepository) => {
  return {
    createTransaction: createTransaction(transactionRepository, userRepository),
    getAllUserTransactions: getAllUserTransactions(transactionRepository),
  };
};
