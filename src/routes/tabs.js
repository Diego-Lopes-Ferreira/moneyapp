import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/TabBar";

import homePage from "../pages/Home";
import AnotherPage from "../pages/Another";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="Home" component={homePage} />
      <Tabs.Screen name="Another" component={AnotherPage} />
    </Tabs.Navigator>
  );
}
