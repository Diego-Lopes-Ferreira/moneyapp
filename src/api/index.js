import * as accountHandler from "./handlers/accounts";
import * as ccHandler from "./handlers/credit_cards";

export const account = { ...accountHandler };
export const credit_cards = { ...ccHandler };
