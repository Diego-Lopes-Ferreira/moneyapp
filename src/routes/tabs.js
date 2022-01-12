import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { colors, sizes } from "../styles";

import homePage from "../pages/Home";
import AnotherPage from "../pages/Another";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tabs.Screen name="Home" component={homePage} />
      <Tabs.Screen name="Another" component={AnotherPage} />
    </Tabs.Navigator>
  );
}

function TabBarIcon({ state, route, index, descriptors, navigation }) {
  const { options } = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={local.tabBarIcon}
    >
      <Feather
        name="home"
        color={isFocused ? colors.background : colors.backgroundLight}
        size={sizes.xl}
      />
      <Text
        style={{
          color: isFocused ? colors.background : colors.backgroundLight,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={local.tabBarContainer}>
      {state.routes.map((route, index) => (
        <TabBarIcon
          key={index}
          state={state}
          route={route}
          index={index}
          descriptors={descriptors}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

const local = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: sizes.l,
    left: sizes.l,
    right: sizes.l,
    elevation: 0,
    backgroundColor: colors.foreground,
    borderRadius: sizes.s,
    height: 2 * sizes.xxxl,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
