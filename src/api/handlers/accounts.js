import { runDb } from "../db";

export async function list() {
  const query = "SELECT * FROM accounts";
  return await runDb(query, []);
}

export async function insert(newAccount) {
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
