import db from "./db";
import {
  accounts,
  credit_cards,
  categories,
  account_transactions,
  cc_transactions,
  transferences,
  dropAllTables,
} from "./tables";

function createTables(tx) {
  // warning: DEBUG ONLY
  tx.executeSql(dropAllTables);

  tx.executeSql(accounts);
  tx.executeSql(credit_cards);
  tx.executeSql(categories);
  tx.executeSql(account_transactions);
  tx.executeSql(cc_transactions);
  tx.executeSql(transferences);
}

export default function setupDatabase() {
  db.transaction(createTables, (err) => console.log(err));

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
  tx.executeSql("SELECT * FROM credit_cards", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM categories", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM account_transactions", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM cc_transactions", [], (_, { rows }) => {
    console.log(rows);
  });
  tx.executeSql("SELECT * FROM transferences", [], (_, { rows }) => {
    console.log(rows);
  });
}
