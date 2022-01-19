import * as accountHandler from "./handlers/accounts";
import * as ccHandler from "./handlers/credit_cards";
import * as accountTransactionHandler from "./handlers/account_transactions";

export const account = { ...accountHandler };
export const credit_cards = { ...ccHandler };
export const account_transaction = { ...accountTransactionHandler };
