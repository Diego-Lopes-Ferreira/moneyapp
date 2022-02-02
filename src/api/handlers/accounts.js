import { runDb } from "../db";
import genId from "../../utils/genId";

export async function list() {
  const query = "SELECT * FROM accounts";
  return await runDb(query, []);
}

export async function read(id) {
  const query = `SELECT * FROM accounts WHERE id=${id}`;
  return await runDb(query, []);
}

export async function create(newAccount) {
  let { name, icon, color, description, balance } = newAccount;
  console.log(parseInt(balance));
  let id = genId();
  let query = `
    INSERT INTO accounts
    (id, name, icon, color, description, balance)
    VALUES
    (?, ?, ?, ?, ?, ?)`;
  return await runDb(query, [id, name, icon, color, description, balance]);
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
    WHERE id='${id}'
  `;
  return await runDb(query);
}

export async function updateBalance(id, balance) {
  let query = `UPDATE accounts SET balance='${balance}' WHERE id='${id}'`;
  return await runDb(query);
}

export async function deleteAccount(account) {
  let { id } = account;
  return await deleteById(id);
}

export async function deleteById(id) {
  let query = `DELETE FROM accounts WHERE id='${id}'`;
  return await runDb(query);
}
