import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, sizes } from "../../styles";
import monthNames, {
  generateMonthYearStringWithOffset,
} from "../../utils/monthNames";

export default function AnotherCalendarHorizontal({ setPageDate }) {
  const [date, setDate] = useState(new Date());

  function goBackDate() {
    let newDate = new Date(date.getUTCFullYear(), date.getMonth() - 1);
    setDate(newDate);
    setPageDate(newDate);
  }

  function goForwardDate() {
    let newDate = new Date(date.getUTCFullYear(), date.getMonth() + 1);
    setDate(newDate);
    setPageDate(newDate);
  }

  return (
    <View style={local.container}>
      <View style={local.cardOut}>
        <TouchableOpacity style={local.cardIn} onPress={goBackDate}>
          <Feather
            name="chevron-left"
            color={colors.foreground}
            size={sizes.m}
          />
          <Text style={local.text}>
            {generateMonthYearStringWithOffset(date, -1)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[local.cardOut, local.selectedContainer]}>
        <Text style={[local.text, local.selectedText]}>
          {monthNames[date.getMonth()]}, {date.getUTCFullYear()}
        </Text>
      </View>
      <View style={local.cardOut}>
        <TouchableOpacity style={local.cardIn} onPress={goForwardDate}>
          <Text style={local.text}>
            {generateMonthYearStringWithOffset(date, 1)}
          </Text>
          <Feather
            name="chevron-right"
            color={colors.foreground}
            size={sizes.m}
          />
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
    paddingVertical: sizes.m,
    borderBottomColor: colors.foreground,
    borderWidth: 1,
  },
  cardOut: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.foreground,
    borderWidth: 1,
    borderRadius: sizes.s,
    paddingVertical: sizes.xxs,
    marginHorizontal: sizes.xs,
  },
  cardIn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
