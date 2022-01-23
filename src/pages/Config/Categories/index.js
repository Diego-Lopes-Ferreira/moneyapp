import { StyleSheet, ScrollView, View, Text } from "react-native";
import global from "../../../styles";
import ButtonSimple from "../../../components/Button/Simple";
import Category from "../../../components/Category";

export default function ConfigCategoriesPage({ route, navigation }) {
  return (
    <View style={global.container}>
      <Text style={local.txt}>Categorias</Text>
      <ButtonSimple
        label="Criar Nova Categoria"
        callback={() => navigation.navigate("Config.Category.Form")}
      />
      <Category
        category={{
          color: "#ff0000",
          name: "Hello",
          type: "income",
          icon: "eye",
        }}
        callback={() =>
          navigation.navigate("Config.Category.Form", {
            category: {
              color: "#ff0000",
              name: "Hello",
              type: "income",
              icon: "eye",
            },
          })
        }
      />
    </View>
  );
}

const local = StyleSheet.create({
  txt: {
    ...global.h1,
  },
});
