import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { sizes, colors } from "../../styles";

export default function PickBetweenTwoTypes({
  type,
  leftType,
  rightType,
  setType,
  rightLabel,
  rightColor,
  leftLabel,
  leftColor,
}) {
  const isExpense = type === leftType;
  return (
    <View style={local.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setType(leftType);
        }}
        style={[local.btn, isExpense && { borderColor: leftColor }]}
      >
        <Text
          style={[local.txt, isExpense && { textDecorationLine: "underline" }]}
        >
          {leftLabel}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setType(rightType);
        }}
        style={[local.btn, !isExpense && { borderColor: rightColor }]}
      >
        <Text
          style={[
            local.txt,
            !isExpense && {
              textDecorationLine: "underline",
            },
          ]}
        >
          {rightLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: sizes.s,
    paddingHorizontal: sizes.s,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
    paddingVertical: sizes.s,
    paddingHorizontal: sizes.s,
    margin: sizes.s,
    borderRadius: sizes.l,
    borderColor: colors.backgroundLight,
    borderWidth: 1,
  },
  txt: {
    color: colors.foreground,
  },
});
