import { runDb } from "../db";
import genId from "../../utils/genId";

export async function create(acc_ts) {
  const { account_id, type, value, name, desc, date, category } = acc_ts;
  let id = genId();
  const query = `
    INSERT INTO
    account_transactions(id, account, type, value, name, description, date, category)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)
  `;
  return runDb(query, [
    id,
    account_id,
    type,
    value,
    name,
    desc,
    date,
    category,
  ]);
}

export async function listByMonth(date) {
  const query = `
    SELECT * FROM account_transactions WHERE date > DATE(${date});
  `;
  return runDb(query);
}

export async function read(id) {
  const query = `SELECT * FROM account_transactions WHERE id='${id}'`;
  return runDb(query);
}

export async function update(acc_ts) {
  let { account, type, value, name, description, date, category } = acc_ts;
  const query = `
  UPDATE account_transactions SET
  account=${account},
  type=${type},
  value=${value},
  name=${name},
  description=${description},
  date=${date},
  category=${category},
  WHERE id=${id}
  `;
  return runDb(query);
}

export async function deleteAccountTransaction(acc_ts) {
  let { id } = acc_ts;
  return deleteById(id);
}

export async function deleteById(id) {
  const query = `DELETE FROM account_transactions WHERE id=${id}`;
  return runDb(query);
}
