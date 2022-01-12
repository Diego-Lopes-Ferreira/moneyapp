import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../styles";

export default function Account({
  iconName,
  name,
  category,
  value,
  hasBorder,
}) {
  let valueFormated = value + ",00";
  return (
    <View
      style={[
        local.containerNoBorder,
        hasBorder ? local.containerWithBorder : {},
      ]}
    >
      <View style={local.circle}>
        <Feather name={iconName} color={colors.background} size={sizes.xxxl} />
      </View>
      <View style={[global.columnGroup, { flex: 1 }]}>
        <Text style={global.text_normal}>{name}</Text>
        <Text style={global.text_small}>{category}</Text>
      </View>
      <View style={local.valueContainer}>
        <Text style={local.value}>R$ {valueFormated}</Text>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  containerNoBorder: {
    width: "90%",
    paddingVertical: sizes.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.foregroundDarker + "77",
    borderBottomWidth: 0,
  },
  containerWithBorder: {
    borderBottomWidth: 1,
  },
  valueContainer: {
    padding: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  value: {
    textAlign: "right",
    color: colors.blue,
    fontSize: sizes.l,
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

/*
  # TODO
  [ ] Account component: Icon, name, type?, value
*/
