drop table if exists transactions;
drop table if exists users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) not null,
  email VARCHAR(255) not null unique,
  password VARCHAR(255) not NULL,
  phone_number VARCHAR(255),
  avatar_url VARCHAR(255),
  account_no VARCHAR(255) not null unique,
  balance double precision not null default 0,
  created_at TIMESTAMP not null default NOW(),
  updated_at TIMESTAMP not null default NOW(),
  deleted_at TIMESTAMP
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER not null,
  type char(1) not null,
  from_to VARCHAR(255) not null,
  description VARCHAR(255),
  amount double precision not null,
  created_at TIMESTAMP not null default NOW(),
  updated_at TIMESTAMP not null default NOW(),
  deleted_at TIMESTAMP
);

ALTER TABLE transactions ADD FOREIGN KEY (user_id) REFERENCES users (id);