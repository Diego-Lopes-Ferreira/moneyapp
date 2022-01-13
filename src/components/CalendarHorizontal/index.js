import { StyleSheet, View, FlatList } from "react-native";
// import { Feather } from "@expo/vector-icons";
import { colors } from "../../styles";

import Item from "./CalendarItem";

let date = new Date();
date.setMonth(date.getMonth() - 10);
let DATA = [];
for (let i = 0; i < 16; i++) {
  date.setMonth(date.getMonth() + 1);
  DATA.push({
    id: i,
    date: new Date(date),
  });
}

export default function CalendarHorizontal({ setDate }) {
  function renderItem({ item }) {
    return <Item date={item.date} setDate={setDate} />;
  }

  return (
    <View style={local.container}>
      <FlatList
        style={local.flatlist}
        contentContainerStyle={local.flatlistContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        initialScrollIndex={15 / 2}
      />
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {
    backgroundColor: colors.green,
  },
  flatlistContainer: {
    backgroundColor: colors.red,
  },
});
