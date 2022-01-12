import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../styles";

export default function CreditCard({
  iconName,
  name,
  category,
  available,
  statement,
  hasBorder,
}) {
  return (
    <View
      style={[
        local.containerNoBorder,
        hasBorder ? local.containerWithBorder : {},
      ]}
    >
      <View style={global.rowGroup}>
        <View style={local.circle}>
          <Feather
            name={iconName}
            color={colors.background}
            size={sizes.xxxl}
          />
        </View>
        <View style={[global.columnGroup, { flex: 1 }]}>
          <Text style={global.text_small}>{category}</Text>
          <Text style={global.text_normal}>{name}</Text>
        </View>
      </View>
      <View style={global.rowGroup}>
        <View style={local.valueSpacing}></View>
        <View style={local.valueContainer}>
          <Text style={global.text_small}>Available</Text>
          <Text style={local.value}>
            R$ {Number.parseFloat(available).toFixed(2)}
          </Text>
        </View>
        <View style={local.valueContainer}>
          <Text style={global.text_small}>Statement</Text>
          <Text style={local.value}>
            R$ -{Number.parseFloat(statement).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  containerNoBorder: {
    width: "90%",
    paddingVertical: sizes.s,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.foregroundDarker + "77",
    borderBottomWidth: 0,
  },
  containerWithBorder: {
    borderBottomWidth: 1,
  },
  valueSpacing: {
    width: sizes.xxxl + sizes.m,
    height: sizes.xxxl + sizes.m,
    marginRight: sizes.s,
  },
  valueContainer: {
    padding: 0,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  value: {
    textAlign: "right",
    color: colors.foreground,
    fontSize: sizes.s,
    padding: 0,
    margin: 0,
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
