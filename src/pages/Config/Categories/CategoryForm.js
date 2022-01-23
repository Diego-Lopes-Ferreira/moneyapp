import { useEffect, useState } from "react";
import global, { colors } from "../../../styles";

import { StyleSheet, View, Text } from "react-native";
import PickBetweenTwoTypes from "../../../components/PickBetweenTwoTypes";
import Input from "../../../components/Input";
import ButtonSimple from "../../../components/Button/Simple";

export default function ConfigCategoryForm({ route, navigation }) {
  const category = route.params?.category;

  const [type, set_type] = useState("expense");
  const [name, set_name] = useState("");
  const [icon, set_icon] = useState("");
  const [color, set_color] = useState("");

  useEffect(() => {
    if (category) {
      set_type(category.type);
      set_name(category.name);
      set_icon(category.icon);
      set_color(category.color);
    }
  }, []);

  function handleSave() {
    if (category) {
      // update with the current values
    } else {
      // create a new category
    }
  }

  return (
    <View style={local.container}>
      <Text style={global.h1}>Criar Nova Categoria</Text>
      <PickBetweenTwoTypes
        type={type}
        setType={set_type}
        leftLabel="Saida"
        leftType="expense"
        leftColor={colors.foreground}
        rightType="income"
        rightLabel="Entrada"
        rightColor={colors.foreground}
      />
      <Input state={name} setState={set_name} label="Nome" />
      <Input state={icon} setState={set_icon} label="Icone" />
      <Input state={color} setState={set_color} label="Cor" />
      <ButtonSimple label="Salvar" callback={handleSave} />
    </View>
  );
}

const local = StyleSheet.create({
  container: {
    ...global.container,
    width: "100%",
  },
});
