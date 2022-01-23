import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import global, { colors, sizes } from "../styles";
import { Feather } from "@expo/vector-icons";

export default function Category({ category, callback }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={local.container}
      onPress={callback}
    >
      <View
        style={{
          padding: sizes.s,
          marginRight: sizes.s,
          borderRadius: sizes.xxxl,
          backgroundColor: category.color,
        }}
      >
        <Feather
          name={category.icon}
          size={sizes.l}
          color={colors.foreground}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={global.text_normal}>{category.name}</Text>
        <Text style={global.text_small}>
          {category.type === "expense" ? "Saída" : "Entrada"}
        </Text>
        <View
          style={{
            flex: 1,
            borderColor:
              category.type === "expense" ? colors.red : colors.green,
            borderBottomWidth: 1,
          }}
        ></View>
      </View>
      <View style={{ padding: sizes.s }}>
        <Feather name="edit-2" size={sizes.l} color={colors.foreground} />
      </View>
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.backgroundLight,
    padding: sizes.s,
    marginHorizontal: sizes.s,
    marginVertical: sizes.xs,
    borderRadius: sizes.s,
  },
  icon_container: {
    marginHorizontal: sizes.s,
  },
  txt: {
    ...global.h1,
  },
});
