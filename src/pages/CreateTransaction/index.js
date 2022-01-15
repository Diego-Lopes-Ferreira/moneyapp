import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import global, { colors, sizes } from "../../styles";
import Input from "./Input";
import PickBetweenTwoTypes from "./PickBetweenTwoTypes";
import HeaderCancelSave from "./HeaderCancelSave";

export default function CreateTransaction({ navigation }) {
  const [type, set_type] = useState("expense");
  const [method, set_method] = useState("account");
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
      <PickBetweenTwoTypes
        type={method}
        leftType="cc"
        rightType="account"
        setType={set_method}
        rightColor={colors.foreground}
        rightLabel="Cartão de Crédito"
        leftColor={colors.foreground}
        leftLabel="Conta"
      />
      <ScrollView style={local.form}>
        {/* <Input state={name} setState={set_name} label="Hi hello" /> */}
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  form: {
    width: "100%",
  },
});
