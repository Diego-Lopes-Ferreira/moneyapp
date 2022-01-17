import { openDatabase } from "expo-sqlite";

const db = openDatabase("db.db");

export async function runDb(query, list) {
  let theList = list || [];
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql(query, theList, (_, { rows }) => {
          resolve(rows);
        });
      },
      (err) => {
        console.log(err);
        resolve(false);
      }
    );
  });
}

export default db;
