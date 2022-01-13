import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import { Feather } from "@expo/vector-icons";
import { colors, sizes } from "../../styles";
import monthNames from "../../utils/monthNames";

export default function AnotherCalendarHorizontal({ setPageDate }) {
  const [date, setDate] = useState(new Date());

  let mb = new Date(date.getUTCFullYear(), date.getMonth() - 1);
  let txtmb = monthNames[mb.getMonth()] + ", " + mb.getUTCFullYear();

  let ma = new Date(date.getUTCFullYear(), date.getMonth() + 1);
  let txtma = monthNames[ma.getMonth()] + ", " + ma.getUTCFullYear();

  function goBackDate() {
    let newDate = new Date(date.getUTCFullYear(), date.getMonth() - 1);
    setDate(newDate);
    // setPageDate(date);
  }

  function goForwardDate() {
    let newDate = new Date(date.getUTCFullYear(), date.getMonth() + 1);
    setDate(newDate);
    // setPageDate(date);
  }

  return (
    <View style={local.container}>
      <View style={local.card}>
        <TouchableOpacity onPress={goBackDate}>
          <Text style={local.text}>{txtmb}</Text>
        </TouchableOpacity>
      </View>
      <View style={[local.card, local.selectedContainer]}>
        <Text style={[local.text, local.selectedText]}>
          {monthNames[date.getMonth()]}, {date.getUTCFullYear()}
        </Text>
      </View>
      <View style={local.card}>
        <TouchableOpacity onPress={goForwardDate}>
          <Text style={local.text}>{txtma}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.foreground,
    borderWidth: 1,
    borderRadius: sizes.s,
    paddingVertical: sizes.xxs,
    paddingHorizontal: sizes.xs,
    marginHorizontal: sizes.xs,
  },
  text: {
    fontSize: sizes.s,
    color: colors.foreground,
  },
  selectedContainer: {
    backgroundColor: colors.foreground,
  },
  selectedText: {
    color: colors.background,
  },
});
