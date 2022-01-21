import { runDb } from "../db";
import genId from "../../utils/genId";

const tb_name = "transferences";

export async function create(newTransference) {
  let { value, from_id, to_id, date } = newTransference;
  let id = genId();
  const query = `
    INSERT INTO
    ${tb_name}(id, value, from_id, to_id, date)
    VALUES(?, ?, ?, ?, ?)
  `;
  return runDb(query, [id, value, from_id, to_id, date]);
}

export async function listByMonth(date) {
  const query = `
    SELECT * FROM ${tb_name} WHERE
        date > DATE(${date})
    AND date < DATE(${date}, '+1 month')
  `;
  return runDb(query);
}

export async function read(id) {
  const query = `SELECT * FROM ${tb_name} WHERE id='${id}'`;
  return runDb(query);
}

export async function update(transference) {
  let { id, value, from_id, to_id, date } = transference;
  const query = `
    UPDATE ${tb_name} SET
    value='${value}',
    from_id='${from_id}',
    to_id='${to_id}',
    date='${date}',
    WHERE id='${id}'
  `;
  return runDb(query);
}

export async function deleteTransference(transference) {
  let { id } = transference;
  return deleteById(id);
}

export async function deleteById(id) {
  const query = `DELETE FROM ${tb_name} WHERE id=${id}`;
  return runDb(query);
}
