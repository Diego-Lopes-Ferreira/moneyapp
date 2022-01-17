import { runDb } from "../db";

export async function list() {
  const query = "SELECT * FROM credit_cards";
  return await runDb(query, []);
}

export async function read(id) {
  const query = `SELECT * FROM credit_cards WHERE id=${id}`;
  return await runDb(query, []);
}

export async function create(credit_card) {
  let {
    name,
    icon,
    color,
    description,
    balance,
    limit,
    close_day,
    due_day,
    payment_account,
  } = credit_card;
  // let id = Math.random().toString(36).slice(2, 10);
  let query = `
    INSERT INTO credit_cards
    (name, icon, color, description, balance, limit, close_day, due_day, payment_account)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  return await runDb(query, [
    name,
    icon,
    color,
    description,
    balance,
    limit,
    close_day,
    due_day,
    payment_account,
  ]);
}

export async function update(credit_card) {
  let {
    name,
    icon,
    color,
    description,
    balance,
    limit,
    close_day,
    due_day,
    payment_account,
  } = credit_card;
  let query = `
    UPDATE credit_cards SET
    name='${name}',
    icon='${icon}',
    color='${color}',
    description='${description}',
    balance=${balance},
    limit='${limit}',
    close_day='${close_day}',
    due_day='${due_day}',
    payment_account='${payment_account}',
    WHERE id=${id}
  `;
  return await runDb(query);
}

export async function updateBalance(id, balance) {
  let query = `UPDATE credit_cards SET balance=${balance} WHERE id=${id}`;
  return await runDb(query);
}

export async function deleteCreditCard(credit_card) {
  let { id } = credit_card;
  return await deleteById(id);
}

export async function deleteById(id) {
  let query = ` DELETE FROM credit_cards SET WHERE id=${id}`;
  return await runDb(query);
}
