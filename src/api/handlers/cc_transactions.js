import genId from "../../utils/genId";
import { runDb } from "../db";

export async function create(newCcTs) {
  let {
    type,
    value,
    name,
    description,
    date,
    buy_date,
    category,
    credit_card,
  } = newCcTs;
  let id = genId();
  const query = `
    INSERT INTO
    cc_transactions(id, type, value, name, description, date, buy_date, category, credit_card)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  return runDb(query, [
    id,
    type,
    value,
    name,
    description,
    date,
    buy_date,
    category,
    credit_card,
  ]);
}

export async function createMultiple(transactions) {
  for (let i = 0; i < transactions.length; i++) {
    create(transactions[i]);
  }
  return true;
}

export async function listByMonth(date) {
  const query = `
    SELECT * FROM cc_transactions WHERE
        date > DATE(${date})
    AND date < DATE(${date}, '+1 month')
  `;
  return runDb(query);
}

export async function read(id) {
  const query = `SELECT * FROM cc_transactions WHERE id='${id}'`;
  return runDb(query);
}

export async function update(cc_ts) {
  let {
    id,
    type,
    value,
    name,
    description,
    date,
    buy_date,
    category,
    credit_card,
  } = cc_ts;
  const query = `
    UPDATE cc_transactions SET
    type='${type}',
    value='${value}',
    name='${name}',
    description='${description}',
    date='${date}',
    buy_date='${buy_date}',
    category='${category}',
    credit_card='${credit_card}',
    WHERE id='${id}'
  `;
  return runDb(query);
}

export async function deleteCcTransaction(cc_ts) {
  let { id } = cc_ts;
  return deleteById(id);
}

export async function deleteById(id) {
  const query = `DELETE FROM cc_transactions WHERE id=${id}`;
  return runDb(query);
}
