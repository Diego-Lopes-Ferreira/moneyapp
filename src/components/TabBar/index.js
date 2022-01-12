import { StyleSheet, View, Text } from "react-native";
import { colors, sizes } from "../../styles";
import TabBarButton from "./Button";

export default function TabBar({ state, descriptors, navigation }) {
  const halfOfArr = Math.ceil(state.routes.length / 2);
  const firstHalf = state.routes.slice(0, halfOfArr);
  const secondHalf = state.routes.slice(halfOfArr);
  let index = 0;
  function returnTabBarIcon(route) {
    const isFocused = state.index === index;
    index += 1;
    const { options } = descriptors[route.key];
    let label = "";
    if (options.tabBarLabel !== undefined) {
      label = options.tabBarLabel;
    } else if (options.title !== undefined) {
      label = options.title;
    } else {
      label = route.name;
    }
    return (
      <TabBarButton
        key={index}
        isFocused={isFocused}
        route={route}
        label={label}
        navigation={navigation}
      />
    );
  }
  return (
    <View style={local.tabBarContainer}>
      {firstHalf.map(returnTabBarIcon)}
      <Text>Here goes button :)</Text>
      {secondHalf.map(returnTabBarIcon)}
    </View>
  );
}

const local = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: colors.foreground,
    borderRadius: sizes.s,
    height: 2 * sizes.xxxl,
  },
});
