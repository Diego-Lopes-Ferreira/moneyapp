import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../../styles";

export default function ButtonIcon({
  callback,
  iconName,
  iconSize,
  iconColor,
  iconBgColor,
}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={callback} style={local.btn}>
      <Feather
        style={[
          local.icon,
          { backgroundColor: iconBgColor || colors.backgroundLight },
        ]}
        name={iconName || "home"}
        size={iconSize || sizes.l}
        color={iconColor || colors.foreground}
      />
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
    borderRadius: sizes.xxxl,
    margin: sizes.s,
  },
  txt: {
    flex: 1,
    ...global.text_normal,
    color: colors.foreground,
  },
  icon: {
    padding: sizes.xs,
    borderRadius: sizes.xxxl,
  },
});
