import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import homePage from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
  # TODO
  ## All
  [ ] Simple Button component:
    - Text, icon, callback, iconSize?, iconColor?, textSize?, textColor?
  [ ] Icon component?
  ## Home Page
  [ ] Card component
  [ ] Account component: Icon, name, type?, value
  [ ] Credit Card Component: Icon, type?, name, Available, Statement
  ## Transactions Page
  [ ] Transaction Component: Icon, name, description, value, (paid x received)
  [ ] Horizontal Calendar component
*/
