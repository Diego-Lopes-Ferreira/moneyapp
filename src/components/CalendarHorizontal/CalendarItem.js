import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import global, { colors, sizes } from "../../styles";

import monthNames from "../../utils/monthNames";

export default function Item({ date, setDate }) {
  function handlePress() {
    setDate(date);
  }

  return (
    <View style={[global.card, local.itemCard]}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={local.text_normal}>
          {monthNames[date.getMonth()]}, {date.getUTCFullYear()}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const local = StyleSheet.create({
  itemCard: {
    // width: sizes.xxxl * sizes.xxs,
    width: "auto",
  },
  text_normal: {
    color: colors.foreground,
    fontSize: sizes.s,
  },
});
