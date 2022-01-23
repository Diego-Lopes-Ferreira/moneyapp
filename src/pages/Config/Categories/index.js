import { StyleSheet, ScrollView, View, Text } from "react-native";
import global from "../../../styles";
import ButtonSimple from "../../../components/Button/Simple";

export default function ConfigCategoriesPage({ route, navigation }) {
  return (
    <View style={global.container}>
      <Text style={local.txt}>Categorias</Text>
      <ButtonSimple
        label="Criar Nova Categoria"
        callback={() => navigation.navigate("Config.Category.Form")}
      />
      <Text style={local.txt}>Lista...</Text>
    </View>
  );
}

const local = StyleSheet.create({
  txt: {
    ...global.h1,
  },
});
