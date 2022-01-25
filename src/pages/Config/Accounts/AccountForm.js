import { useEffect, useState } from "react";
import global, { colors, sizes } from "../../../styles";

import { StyleSheet, View, ScrollView, Text, Alert } from "react-native";
import Input from "../../../components/Input";
import ButtonSimple from "../../../components/Button/Simple";
import ValueInput from "../../../components/ValueInput";

import { account } from "../../../api";

export default function ConfigAccountForm({ route, navigation }) {
  const account = route.params?.account;

  const [name, set_name] = useState("");
  const [icon, set_icon] = useState("");
  const [color, set_color] = useState("");
  const [desc, set_desc] = useState("");
  const [balance, set_balance] = useState("");

  useEffect(() => {
    if (account) {
      set_type(account.type);
      set_name(account.name);
      set_icon(account.icon);
      set_color(account.color);
    }
  }, []);

  function handleSave() {
    if (account) {
      // update account
    } else {
      // create account
    }
    navigation.goBack();
  }

  function handleDelete() {
    Alert.alert(
      "Hey",
      `Deseja mesmo deletar essa conta?\nTodas as transações feitas com ela serão excluídas.`,
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            // delete account
            navigation.goBack();
          },
        },
      ]
    );
  }

  return (
    <View style={global.container}>
      <Text style={global.h1}>Criar Nova Conta</Text>
      <ScrollView style={local.scrollview}>
        <Input state={name} setState={set_name} label="Nome" />
        <Input state={icon} setState={set_icon} label="Icone" />
        <Input state={color} setState={set_color} label="Cor" />
        <Input state={desc} setState={set_desc} label="Descrição" />
        <ValueInput state={balance} setState={set_balance} label="Saldo" />
      </ScrollView>
      <ButtonSimple label="Salvar" callback={handleSave} />
      {account && <ButtonSimple label="Deletar" callback={handleDelete} />}
    </View>
  );
}

const local = StyleSheet.create({
  scrollview: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
});
