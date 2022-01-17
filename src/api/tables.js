export const dropAllTables = `
DROP TABLE accounts;
DROP TABLE credit_cards;
DROP TABLE categories;
DROP TABLE account_transactions;
DROP TABLE cc_transactions;
DROP TABLE transferences;
`;

export const accounts = `
CREATE TABLE IF NOT EXISTS accounts (
  id integer primary key autoincrement,
  name text,
  icon text,
  color text,
  description text,
  balance integer
)
`;

export const credit_cards = `
CREATE TABLE IF NOT EXISTS credit_cards (
  id integer primary key autoincrement,
  name text,
  icon text,
  color text,
  description text,
  balance integer,
  the_limit integer,
  close_day integer,
  due_day integer,
  account text,
  FOREIGN KEY (account) REFERENCES accounts (id)
)
`;

export const categories = `
CREATE TABLE IF NOT EXISTS categories (
  id integer primary key autoincrement,
  type text,
  name text,
  icon text,
  color text
)
`;

export const account_transactions = `
CREATE TABLE IF NOT EXISTS account_transactions (
  id integer primary key autoincrement,
  type text,
  value integer,
  name text,
  description text,
  date text,
  category text,
  account text,
  FOREIGN KEY (account) REFERENCES accounts (id),
  FOREIGN KEY (category) REFERENCES categories (id)
)
`;

export const cc_transactions = `
CREATE TABLE IF NOT EXISTS cc_transactions (
  id integer primary key autoincrement,
  type text,
  value integer,
  name text,
  description text,
  date text,
  buy_date text,
  category text,
  credit_card text,
  FOREIGN KEY (category) REFERENCES categories (id),
  FOREIGN KEY (credit_card) REFERENCES credit_cards (id)
)
`;

export const transferences = `
CREATE TABLE IF NOT EXISTS transferences (
  id integer primary key autoincrement,
  value integer,
  from_id text,
  to_id text,
  date text,
  FOREIGN KEY (from_id) REFERENCES accounts (id),
  FOREIGN KEY (to_id) REFERENCES accounts (id)
)
`;
