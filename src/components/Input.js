import { StyleSheet, View, Text, TextInput } from "react-native";
import { colors, sizes } from "../styles";

export default function Input({ state, setState, label }) {
  return (
    <View style={local.container}>
      <Text style={local.text}>{label}</Text>
      <TextInput value={state} onChangeText={setState} style={local.input} />
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    paddingHorizontal: sizes.l,
    fontSize: sizes.l,
    color: colors.foreground,
  },
  input: {
    alignSelf: "stretch",
    padding: sizes.s,
    margin: sizes.l,
    color: colors.foreground,
    borderColor: colors.foreground,
    borderWidth: 1,
  },
});
