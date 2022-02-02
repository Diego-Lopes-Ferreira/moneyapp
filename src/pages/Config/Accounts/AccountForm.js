import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, Alert } from "react-native";

import global, { colors, sizes } from "../../../styles";

import Input from "../../../components/Input";
import ButtonSimple from "../../../components/Button/Simple";
import ValueInput from "../../../components/ValueInput";
import IconPicker from "../../../components/Picker/Icon";
import ColorPicker from "../../../components/Picker/Color";
import Account from "../../../components/Account";

import { account } from "../../../api";

import categories_colors from "../../../utils/categories_colors";

export default function ConfigAccountForm({ route, navigation }) {
  const acc = route.params?.account;

  const [name, set_name] = useState("");
  const [icon, set_icon] = useState("home");
  const [color, set_color] = useState(categories_colors[0]);
  const [desc, set_desc] = useState("");
  const [balance, set_balance] = useState("");

  useEffect(() => {
    if (acc) {
      set_desc(acc.description);
      set_name(acc.name);
      set_icon(acc.icon);
      set_color(acc.color);
    }
  }, []);

  function handleSave() {
    if (acc) {
      account.update({
        id: acc.id,
        name,
        icon,
        color,
        description: desc,
        balance,
      });
    } else {
      account.create({ name, icon, color, description: desc, balance });
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
        <IconPicker
          color={color}
          setState={set_icon}
          label="Selecione o Ícone"
        />
        <ColorPicker icon={icon} setState={set_color} label="Selecione a Cor" />
      </ScrollView>
      <Account
        iconName={icon}
        name={name}
        description={desc}
        value={balance}
        bgColor={color}
        hasBorder={false}
      />
      <ButtonSimple label="Salvar" callback={handleSave} />
      {acc && <ButtonSimple label="Deletar" callback={handleDelete} />}
    </View>
  );
}

const local = StyleSheet.create({
  scrollview: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
});
