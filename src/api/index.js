import * as accountTransactionHandler from "./handlers/account_transactions";
import * as accountHandler from "./handlers/accounts";
import * as categoriesHandler from "./handlers/categories";
import * as transferencesHandler from "./handlers/transferences";
// import * as ccTransactionHandler from "./handlers/cc_transactions";
// import * as ccHandler from "./handlers/credit_cards";

export const account_transaction = { ...accountTransactionHandler };
export const account = { ...accountHandler };
export const categories = { ...categoriesHandler };
export const transferences = { ...transferencesHandler };
// export const credit_cards = { ...ccHandler };
// export const cc_transaction = { ...ccTransactionHandler };
