import db from "./db";
import {
  accounts,
  categories,
  account_transactions,
  transferences,
  dropAllTables,
  // credit_cards,
  // cc_transactions,
} from "./tables";

function createTables(tx) {
  tx.executeSql(accounts);
  tx.executeSql(categories);
  tx.executeSql(account_transactions);
  tx.executeSql(transferences);
  // tx.executeSql(credit_cards);
  // tx.executeSql(cc_transactions);
}

export default function setupDatabase() {
  db.transaction(createTables, (err) => console.log(err));

  // warning: DEBUG ONLY
  console.log("\n\nShowing rows " + new Date().toTimeString());
  db.transaction(readToTerminal, (err) => console.log(err));
}

export function cleanDatabase() {
  db.transaction(
    (tx) => {
      tx.executeSql(dropAllTables);
    },
    (err) => console.log(err)
  );

  // warning: DEBUG ONLY
  console.log("\n\nShowing rows " + new Date().toTimeString());
  db.transaction(readToTerminal, (err) => console.log(err));
}

// warning: DEBUG ONLY
function readToTerminal(tx) {
  tx.executeSql("SELECT * FROM accounts", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM accounts", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM categories", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM account_transactions", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM transferences", [], (_, { rows }) => {
    console.log(rows);
  });
  /*
  tx.executeSql("SELECT * FROM credit_cards", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM cc_transactions", [], (_, { rows }) => {
    console.log(rows);
  });
  */
}
