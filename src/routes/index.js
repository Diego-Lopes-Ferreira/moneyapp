import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import TabNavigator from "./tabs";
import CreateTransactionCreateWhat from "../pages/CreateTransaction/SelectWhat";
import SelectAccountCc from "../pages/CreateTransaction/SelectAccountCc";

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
    </Stack.Navigator>
  );
}
