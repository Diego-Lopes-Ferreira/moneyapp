import { StyleSheet, Text, TouchableOpacity } from "react-native";
import global, { colors, sizes } from "../../styles";

export default function ButtonSimple({ label, callback }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={callback} style={local.btn}>
      <Text style={local.txt}>{label}</Text>
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  btn: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.foreground,
    borderRadius: sizes.xxxl,
    padding: sizes.s,
    margin: sizes.s,
  },
  txt: {
    ...global.text_normal,
    color: colors.background,
  },
});
