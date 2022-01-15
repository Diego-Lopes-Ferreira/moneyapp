import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import global, { colors, sizes } from "../styles";
import { useState } from "react";
import { genDayMonthYearString } from "../utils/monthNames";

export default function DatePicker({ date, setDate }) {
  const [show, setShow] = useState(false);

  function onChange(event, selectedDate) {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  }

  return (
    <View style={local.container}>
      <Text style={global.text_normal}>Data: </Text>
      <TouchableOpacity style={local.btn} onPress={() => setShow(true)}>
        <Text style={local.txt}>{genDayMonthYearString(date)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    // flexDirection: "row",
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: sizes.s,
    paddingVertical: sizes.s,
    marginHorizontal: sizes.xl,
    borderRadius: sizes.m,
  },
  btn: {
    width: "100%",
    paddingHorizontal: sizes.s,
    paddingVertical: sizes.s,
    borderRadius: sizes.s,
    borderColor: colors.foreground,
    borderWidth: 1,
  },
  txt: {
    ...global.text_normal,
    textAlign: "center",
  },
});
