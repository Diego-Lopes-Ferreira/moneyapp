import { runDb } from "../db";
import genId from "../../utils/genId";

const tb_name = "categories";

export async function create(newTransference) {
  let { type, name, icon, color } = newTransference;
  let id = genId();
  const query = `
    INSERT INTO
    ${tb_name}(id, type, name, icon, color)
    VALUES(?, ?, ?, ?, ?)
  `;
  return runDb(query, [id, type, name, icon, color]);
}

export async function list() {
  const query = `SELECT * FROM ${tb_name}`;
  return runDb(query);
}

export async function read(id) {
  const query = `SELECT * FROM ${tb_name} WHERE id='${id}'`;
  return runDb(query);
}

export async function update(transference) {
  let { id, type, name, icon, color } = transference;
  const query = `
    UPDATE ${tb_name} SET
    type='${type}',
    name='${name}',
    icon='${icon}',
    color='${color}',
    WHERE id='${id}'
  `;
  return runDb(query);
}

export async function deleteCategory(cat) {
  let { id } = cat;
  return deleteById(id);
}

export async function deleteById(id) {
  const query = `DELETE FROM ${tb_name} WHERE id=${id}`;
  return runDb(query);
}
