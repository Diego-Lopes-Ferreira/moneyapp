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
      <Text style={local.text}>Data: </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={local.input}
        onPress={() => setShow(true)}
      >
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
    flex: 1,
    marginBottom: sizes.xl,
  },
  text: {
    paddingHorizontal: sizes.l,
    fontSize: sizes.l,
    color: colors.foreground,
  },
  input: {
    alignSelf: "stretch",
    padding: sizes.s,
    marginHorizontal: sizes.s,
    marginTop: sizes.xs,
    color: colors.foreground,
    borderRadius: sizes.s,
    borderColor: colors.foreground,
    borderWidth: 1,
  },
  txt: {
    ...global.text_normal,
    textAlign: "center",
  },
});
