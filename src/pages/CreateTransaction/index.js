import { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import global, { colors, sizes } from "../../styles";
import Input from "../../components/Input";
import PickBetweenTwoTypes from "../../components/PickBetweenTwoTypes";
import HeaderCancelSave from "./HeaderCancelSave";
import DatePicker from "../../components/DatePicker";

export default function CreateTransaction({ navigation }) {
  const [type, set_type] = useState("expense");
  const [method, set_method] = useState("account");
  const [cc_ac_id, set_cc_ac_id] = useState("account");
  const [date, set_date] = useState(new Date());
  const [value, set_value] = useState(0);
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");
  const [category, set_category] = useState("");

  return (
    <View style={global.container}>
      <HeaderCancelSave
        leftPress={() => navigation.goBack()}
        rightPress={() => {
          console.log("go forward");
        }}
        title="Nova Transação"
      />
      <PickBetweenTwoTypes
        type={type}
        leftType="expense"
        rightType="income"
        setType={set_type}
        leftColor={colors.red}
        leftLabel="Saída"
        rightColor={colors.green}
        rightLabel="Entrada"
      />
      <ScrollView style={local.form}>
        <PickBetweenTwoTypes
          type={method}
          setType={set_method}
          rightLabel="Cartão de Crédito"
          rightType="cc"
          rightColor={colors.foreground}
          leftType="account"
          leftLabel="Conta"
          leftColor={colors.foreground}
        />
        <DatePicker date={date} setDate={set_date} />
        <Input state={name} setState={set_name} label="Nome" />
        <Input
          state={description}
          setState={set_description}
          label="Descrição"
        />
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  form: {
    width: "100%",
  },
});
