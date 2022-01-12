import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { colors, sizes } from "../styles";

export default function Header() {
  return <View style={local.headerContainer}></View>;
}

const local = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.background,
    paddingTop: Constants.statusBarHeight + sizes.xxs,
  },
});
