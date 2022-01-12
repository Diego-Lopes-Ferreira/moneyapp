import { StyleSheet, View, Text } from "react-native";
import { colors, sizes } from "../../styles";
import TabBarButton from "./Button";

export default function TabBar({ state, descriptors, navigation }) {
  const halfOfArr = Math.ceil(state.routes.length / 2);
  const firstHalf = state.routes.slice(0, halfOfArr);
  const secondHalf = state.routes.slice(halfOfArr);

  function returnTabBarIcon(route, index) {
    return (
      <TabBarButton
        key={index}
        state={state}
        route={route}
        index={index}
        descriptors={descriptors}
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
    position: "absolute",
    bottom: sizes.l,
    left: sizes.l,
    right: sizes.l,
    elevation: 0,
    backgroundColor: colors.foreground,
    borderRadius: sizes.s,
    height: 2 * sizes.xxxl,
  },
});
