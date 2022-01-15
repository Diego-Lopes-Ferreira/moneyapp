import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import global, { colors, sizes } from "../../styles";

export default function HeaderCancelSave({ leftPress, title }) {
  return (
    <View style={local.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={leftPress}
        style={local.btnWrapper}
      >
        <Text style={local.cancelBtnText}>Cancelar</Text>
      </TouchableOpacity>
      <Text style={[global.text_normal, local.headerTitle]}>{title}</Text>
    </View>
  );
}

const local = StyleSheet.create({
  header: {
    alignSelf: "stretch",
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    flex: 3,
    textAlign: "center",
  },
  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: sizes.xs,
    paddingHorizontal: sizes.xs,
    borderRadius: sizes.m,
    backgroundColor: colors.foreground,
  },
  saveBtnWrapper: {
    backgroundColor: colors.green,
  },
  cancelBtnText: {
    color: colors.background,
    fontSize: sizes.s,
  },
  saveBtnText: {
    color: colors.background,
    fontSize: sizes.s,
  },
});
