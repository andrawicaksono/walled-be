const registerUserFormatter = (data) => {
  return {
    id: data.id,
    full_name: data.full_name,
    email: data.email,
    phone_number: data.phone_number,
    account_no: data.account_no,
    balance: data.balance,
    created_at: data.created_at,
    updated_at: data.updated_at,
  };
};

const loginFormatter = (data) => {
  return {
    user: {
      full_name: data.user.full_name,
      email: data.user.email,
      phone_number: data.user.phone_number,
      account_no: data.user.account_no,
      balance: data.user.balance,
      created_at: data.user.created_at,
      updated_at: data.user.updated_at,
    },
    token: data.token,
  };
};

module.exports = {
  registerUserFormatter,
  loginFormatter,
};
