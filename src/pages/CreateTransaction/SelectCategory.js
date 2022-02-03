import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useIsFocused, StackActions } from "@react-navigation/native";

import global, { sizes, colors } from "../../styles";

import ButtonIconName from "../../components/Button/IconName";
import HeaderCancelSave from "./HeaderCancelSave";

import { categories, account_transaction } from "../../api";

export default function SelectCategory({ route, navigation }) {
  const isFocused = useIsFocused();
  const [cats, set_cats] = useState();
  const { data } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSelectCategory(id) {
    data.category = id;
    console.log(data);
    // TODO: save "data" on database
    account_transaction.create({
      account_id: data.account_id,
      type: data.type,
      value: data.value,
      name: data.name,
      desc: data.desc,
      date: data.date,
      category: id,
    });
    navigation.reset({
      index: 0,
      routes: [{ name: "TabNavigator" }],
    });
  }

  async function fetchCategories() {
    let { _array } = await categories.list();
    set_cats(_array);
  }
  useEffect(() => {
    fetchCategories();
  }, [isFocused]);

  return (
    <View style={global.container}>
      <HeaderCancelSave
        leftPress={handleGoBack}
        title="Selecione a categoria"
      />
      <ScrollView style={local.scrollView}>
        {cats?.length > 0 ? (
          cats.map((cat, index) => (
            <ButtonIconName
              key={index}
              label={cat.name}
              callback={() => handleSelectCategory(cat.id)}
              iconName={cat.icon}
              iconColor={colors.background}
              iconBgColor={cat.color}
            />
          ))
        ) : (
          <Text style={global.text_normal}>Nenhuma Categoria</Text>
        )}
        <ButtonIconName
          label="Banco X"
          callback={() => handleSelectCategory(123)}
          iconName="droplet"
          iconSize={sizes.l}
          iconColor={colors.foreground}
          iconBgColor={colors.red}
        />
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  txt: {
    ...global.h1,
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
});
