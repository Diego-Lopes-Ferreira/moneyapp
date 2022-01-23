import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import global from "../../../styles";
import ButtonSimple from "../../../components/Button/Simple";
import Category from "../../../components/Category";

import { categories } from "../../../api";
import { useFocusEffect } from "@react-navigation/core";

export default function ConfigCategoriesPage({ route, navigation }) {
  const [cats, set_cats] = useState([]);

  async function fetchData() {
    let { _array } = await categories.list();
    set_cats(_array);
  }

  useFocusEffect(() => {
    fetchData();
  });

  return (
    <View style={global.container}>
      <Text style={local.txt}>Categorias</Text>
      <ButtonSimple
        label="Criar Nova Categoria"
        callback={() => navigation.navigate("Config.Category.Form")}
      />
      {cats ? (
        cats.map((cat, index) => (
          <Category
            key={index}
            category={cat}
            callback={() =>
              navigation.navigate("Config.Category.Form", { category: cat })
            }
          />
        ))
      ) : (
        <Text>No Cateogries</Text>
      )}
    </View>
  );
}

const local = StyleSheet.create({
  txt: {
    ...global.h1,
  },
});
