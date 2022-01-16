import { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import global, { colors, sizes } from "../../styles";
import PickBetweenTwoTypes from "../../components/PickBetweenTwoTypes";
import HeaderCancelSave from "./HeaderCancelSave";
import ButtonSimple from "../../components/Button/Simple";
import Input from "../../components/Input";
import ValueInput from "../../components/ValueInput";
import DatePicker from "../../components/DatePicker";
import SelectNumberOfParts from "../../components/SelectNumber";

export default function CcTransactionForm({ route, navigation }) {
  const { cc_id } = route.params;

  const [type, set_type] = useState("expense");
  const [name, set_name] = useState("");
  const [desc, set_desc] = useState("");
  const [date, set_date] = useState(new Date());
  const [value, set_value] = useState("0,00");
  const [times, set_times] = useState(1);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSelectCategory() {
    if (name == "") return;
    if (value.replace(",", "") == 0) return;
    let theVal = value.replace(",", "");
    let theDate = date.toISOString();
    navigation.navigate("CreateTransaction.SelectCategory", {
      data: {
        cc_id,
        type,
        value: theVal,
        name,
        desc,
        date: theDate,
        times,
      },
    });
  }

  return (
    <View style={global.container}>
      <HeaderCancelSave leftPress={handleGoBack} title="Transação: 'Banco X'" />
      <ScrollView style={local.scrollView}>
        <PickBetweenTwoTypes
          type={type}
          setType={set_type}
          leftType="expense"
          leftLabel="Saída"
          leftColor={colors.red}
          rightType="income"
          rightLabel="Entrada"
          rightColor={colors.green}
        />
        <ValueInput state={value} setState={set_value} label="Valor" />
        <SelectNumberOfParts value={value} state={times} setState={set_times} />
        <Input state={name} setState={set_name} label="Nome" />
        <Input state={desc} setState={set_desc} label="Descrição (Opcional)" />
        <DatePicker date={date} setDate={set_date} />
        <ButtonSimple
          label="Selecionar Categoria"
          callback={handleSelectCategory}
        />
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  scrollView: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
  txt: {
    ...global.text_normal,
    textAlign: "center",
    paddingHorizontal: sizes.s,
    paddingVertical: sizes.s,
  },
});
