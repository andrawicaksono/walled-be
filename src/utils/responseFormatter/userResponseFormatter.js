const authenticatedUserFormatter = (data) => {
  return {
    id: data.id,
    full_name: data.full_name,
    email: data.email,
    phone_number: data.phone_number,
    account_no: data.account_no,
    balance: data.balance,
    avatar_url: data.avatar_url,
    created_at: data.created_at,
    updated_at: data.updated_at,
  };
};

module.exports = {
  authenticatedUserFormatter,
};
