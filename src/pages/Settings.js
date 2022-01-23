import { ScrollView, Text, View } from "react-native";
import global from "../styles";
import ButtonSimple from "../components/Button/Simple";

export default function SettingsPage({ navigation }) {
  function navigateToTestPage() {
    navigation.navigate("Debug.TestPage");
  }
  return (
    <ScrollView contentContainerStyle={global.container}>
      <View style={global.card}>
        <Text style={global.text_normal}>Configurações</Text>
      </View>
      <ButtonSimple label="TEST PAGE" callback={navigateToTestPage} />
      <ButtonSimple
        label="Categorias"
        callback={() => navigation.navigate("Config.Category")}
      />
    </ScrollView>
  );
}
