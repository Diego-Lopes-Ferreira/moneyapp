import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../../styles";

export default function ButtonIconName({
  label,
  callback,
  iconName,
  iconColor,
  iconBgColor,
}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={callback} style={local.btn}>
      <Feather
        style={[local.icon, { backgroundColor: iconBgColor }]}
        name={iconName}
        size={sizes.s}
        color={iconColor}
      />
      <Text style={local.txt}>{label}</Text>
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  btn: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
    borderRadius: sizes.xxxl,
    paddingVertical: sizes.s,
    paddingHorizontal: sizes.xxs,
    margin: sizes.s,
  },
  txt: {
    flex: 1,
    ...global.text_normal,
    color: colors.foreground,
  },
  icon: {
    padding: sizes.s,
    marginHorizontal: sizes.s,
    borderRadius: sizes.xxxl,
  },
});
