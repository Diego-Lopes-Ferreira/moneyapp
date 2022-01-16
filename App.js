import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

// Pages
import StackRoutes from "./src/routes";
import Header from "./src/components/Header";
import setupDatabase from "./src/api/db_setup";

export default function App() {
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Header />
      <StatusBar style="light" />
      <StackRoutes />
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
  [x] Account component: Icon, name, type?, value
  [x] Credit Card Component: Icon, type?, name, Available, Statement
  ## Transactions Page
  [x] Transaction Component: Icon, name, description, value, (paid x received)
  [ ] Horizontal Calendar component
*/
