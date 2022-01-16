import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../styles";

export default function SelectNumberOfParts({ state, setState }) {
  function down() {
    setState(state - 1);
  }

  function up() {
    setState(state + 1);
  }

  return (
    <View style={local.container}>
      <TouchableOpacity activeOpacity={0.7} style={local.btn} onPress={down}>
        <Feather
          style={[local.icon, { backgroundColor: colors.backgroundLight }]}
          size={sizes.l}
          color={colors.foreground}
          name="chevron-left"
        />
      </TouchableOpacity>
      <Text style={local.txt}>{state}</Text>
      <TouchableOpacity activeOpacity={0.7} style={local.btn} onPress={up}>
        <Feather
          style={[local.icon, { backgroundColor: colors.backgroundLight }]}
          size={sizes.l}
          color={colors.foreground}
          name="chevron-right"
        />
      </TouchableOpacity>
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  btn: {},
  icon: {
    padding: sizes.xs,
    marginHorizontal: sizes.s,
    borderRadius: sizes.xxxl,
  },
  txt: {
    ...global.h1,
  },
});
