import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../styles";

export default function Expense({
  iconName,
  iconColor, // needed?
  name,
  category,
  value,
  status,
}) {
  return (
    <TouchableOpacity style={local.containerNoBorder}>
      <View style={local.circle}>
        <Feather name={iconName} color={iconColor} size={sizes.xxxl} />
      </View>
      <View style={global.rowGroup}>
        <View style={[global.columnGroup, { flex: 1 }]}>
          <Text style={global.text_normal}>{name}</Text>
          <Text style={global.text_small}>{category}</Text>
        </View>
      </View>
      <View style={local.valueContainer}>
        <Text
          style={[local.value, value < 0 ? local.valueRed : local.valueGreen]}
        >
          R$ {Number.parseFloat(value).toFixed(2)}
        </Text>
        <Text style={global.text_small}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  containerNoBorder: {
    width: "90%",
    marginVertical: sizes.xxs,
    paddingVertical: sizes.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.foregroundDarker + "77",
    borderBottomWidth: 0,
  },
  valueSpacing: {
    width: sizes.xxxl + sizes.m,
    height: sizes.xxxl + sizes.m,
    marginRight: sizes.s,
  },
  valueContainer: {
    padding: 0,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  value: {
    textAlign: "right",
    color: colors.foreground,
    fontSize: sizes.s,
    padding: 0,
    margin: 0,
  },
  valueGreen: {
    color: colors.green,
  },
  valueRed: {
    color: colors.red,
  },
  circle: {
    width: sizes.xxxl + sizes.m,
    height: sizes.xxxl + sizes.m,
    marginRight: sizes.s,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.foreground,
    borderWidth: 1,
  },
});
