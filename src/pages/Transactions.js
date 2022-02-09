import { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import global, { sizes } from "../styles";

import AnotherCalendarHorizontal from "../components/AnotherCalendarHorizontal";
import Expense from "../components/Expense";

import { account_transaction /* , cc_transaction */ } from "../api";

export default function TransactionPage({ route, navigation }) {
  const isFocused = useIsFocused();
  const [date, set_date] = useState(new Date());
  const [transactions, set_transactions] = useState([]);

  async function fetchAccountTs() {
    let { _array } = await account_transaction.listByMonth(date);
    return _array;
  }

  /*
  async function fetchCreditCardTs() {
    let { _array } = await cc_transaction.listByMonth(date);
    return _array;
  }
  */

  async function fetchData() {
    let arr = [];
    arr = [...arr, await fetchAccountTs()];
    // arr = [...arr, await fetchCreditCardTs()];
    set_transactions(arr);
  }

  useEffect(() => {
    fetchData();
  }, [isFocused, date]);

  return (
    <View style={global.container}>
      <Text style={global.h2}>Transações</Text>
      <AnotherCalendarHorizontal setPageDate={set_date} />
      <ScrollView
        style={local.scrollView}
        contentContainerStyle={local.scrollViewContainer}
      >
        {transactions.lenth > 0 ? (
          transactions.map((ts, index) => <Expense />)
        ) : (
          <Text style={global.text_normal}>
            Nenhuma Transação Registrada nesse Mês
          </Text>
        )}
        <View style={local.spacing}></View>
      </ScrollView>
    </View>
  );
}
const local = StyleSheet.create({
  scrollView: {
    width: "100%",
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spacing: {
    height: sizes.xxxl,
  },
});
