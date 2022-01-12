import { StyleSheet, View } from "react-native";
import { colors, sizes } from "../../styles";
import TabBarButton from "./Button";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={local.tabBarContainer}>
      {state.routes.map((route, index) => (
        <TabBarButton
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
});
