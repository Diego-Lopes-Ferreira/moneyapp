import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import TabNavigator from "./tabs";
import CreateTransactionCreateWhat from "../pages/CreateTransaction/SelectWhat";
import SelectAccountCc from "../pages/CreateTransaction/SelectAccountCc";
import AccountTransactionForm from "../pages/CreateTransaction/AccountTransactionForm";
import SelectCategory from "../pages/CreateTransaction/SelectCategory";
import CcTransactionForm from "../pages/CreateTransaction/CcTransactionForm";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="CreateTransaction.SelectWhat"
        component={CreateTransactionCreateWhat}
      />
      <Stack.Screen
        name="CreateTransaction.SelectAccountCc"
        component={SelectAccountCc}
      />
      <Stack.Screen
        name="CreateTransaction.AccountTransactionForm"
        component={AccountTransactionForm}
      />
      <Stack.Screen
        name="CreateTransaction.CcTransactionForm"
        component={CcTransactionForm}
      />
      <Stack.Screen
        name="CreateTransaction.SelectCategory"
        component={SelectCategory}
      />
    </Stack.Navigator>
  );
}
