import { StyleSheet, ScrollView, View, Text, ToastAndroid } from "react-native";
import HeaderCancelSave from "./HeaderCancelSave";
import global, { colors, sizes } from "../../styles";
import { useState } from "react";
import SelectAccountModal from "../../components/SelectAccountModal.js";
import ValueInput from "../../components/ValueInput";
import DatePicker from "../../components/DatePicker";
import ButtonSimple from "../../components/Button/Simple";

export default function TransferenceFormFrom({ route, navigation }) {
  const [toAccount, setToAccount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [value, setvalue] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <View style={local.container}>
      <HeaderCancelSave
        leftPress={() => navigation.goBack()}
        title="Selecione as contas e o valor"
      />
      <ScrollView style={local.scrollView}>
        <Text style={local.txt}>
          R$ {Number.parseFloat(value.replace(",", "") / 100).toFixed(2)}
        </Text>
        <Text style={local.txt}>
          de: {fromAccount} para: {toAccount}
        </Text>
        <SelectAccountModal
          label="Selecione a Conta de Saída"
          setState={setFromAccount}
        />
        <SelectAccountModal
          label="Selecione a Conta de Entrada"
          setState={setToAccount}
        />
        <ValueInput state={value} setState={setvalue} label="Valor" />
        <DatePicker date={date} setDate={setDate} />
      </ScrollView>
      <ButtonSimple callback={() => {}} label="Salvar" />
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    ...global.container,
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
  txt: {
    ...global.h1,
    textAlign: "center",
  },
});
