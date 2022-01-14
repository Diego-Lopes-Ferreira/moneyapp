import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, sizes } from "../../styles";

export default function TabBarPlus({ callback }) {
  return (
    <TouchableOpacity
      style={local.container}
      onPress={callback}
      activeOpacity={0.7}
    >
      <Feather name="plus" color={colors.foreground} size={sizes.xxxl} />
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  container: {
    width: sizes.xxxl * 1.5,
    height: sizes.xxxl * 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizes.xxxl,
    backgroundColor: colors.green,
  },
});
