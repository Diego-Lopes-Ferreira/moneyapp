import { StyleSheet, View, Text, TextInput } from "react-native";
import global, { colors, sizes } from "../styles";

export default function ValueInput({ state, setState, label }) {
  function handleChange(what) {
    what = what.replace(",", "");
    let val = Number.parseFloat(what / 100).toFixed(2);
    val = val.replace(".", ",");
    setState(val);
  }

  return (
    <View style={local.container}>
      <Text style={local.text}>{label}</Text>
      <View style={local.row}>
        <Text style={local.text}>R$ </Text>
        <TextInput
          keyboardType="numeric"
          value={state}
          onChangeText={handleChange}
          style={local.input}
        />
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    ...global.rowGroup,
    justifyContent: "center",
    alignItems: "center",
    margin: sizes.l,
    borderColor: colors.foreground,
    borderWidth: 1,
  },
  text: {
    paddingHorizontal: sizes.l,
    fontSize: sizes.l,
    color: colors.foreground,
  },
  input: {
    flex: 1,
    padding: sizes.s,
    color: colors.foreground,
  },
});
