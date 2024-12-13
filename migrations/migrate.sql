DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  account_no VARCHAR(255) NOT NULL UNIQUE,
  balance double precision NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP
);

CREATE TABLE transactions(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  type char(1) NOT NULL,
  from_to VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  amount double precision NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP
);

ALTER TABLE transactions ADD FOREIGN KEY (user_id) REFERENCES users(id);