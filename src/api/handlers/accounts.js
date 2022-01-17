import { runDb } from "../db";

export async function list() {
  const query = "SELECT * FROM accounts";
  return await runDb(query, []);
}

export async function create(newAccount) {
  let { name, icon, color, description, balance } = newAccount;
  console.log(parseInt(balance));
  // let id = Math.random().toString(36).slice(2, 10);
  let query = `
    INSERT INTO accounts
    (name, icon, color, description, balance)
    VALUES
    (?, ?, ?, ?, ?)`;
  return await runDb(query, [name, icon, color, description, balance]);
}

export async function update(account) {
  let { id, name, icon, color, description, balance } = account;
  let query = `
    UPDATE accounts SET
    name='${name}',
    icon='${icon}',
    color='${color}',
    description='${description}',
    balance='${balance}'
    WHERE id=${id}
  `;
  return await runDb(query, [name, icon, color, description, balance]);
}

export async function deleteAccount(account) {
  let { id } = account;
  return await deleteById(id);
}

export async function deleteById(id) {
  let query = ` DELETE FROM accounts SET WHERE id=${id}`;
  return await runDb(query);
}
