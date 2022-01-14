import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import TabNavigator from "./tabs";
import CreateTransaction from "../pages/CreateTransaction";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="CreateTransaction" component={CreateTransaction} />
    </Stack.Navigator>
  );
}
