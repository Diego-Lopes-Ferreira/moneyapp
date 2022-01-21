import { ScrollView, Text, View } from "react-native";
import global from "../../styles";
import ButtonSimple from "../../components/Button/Simple";

export default function TestPage() {
  return (
    <ScrollView contentContainerStyle={global.container}>
      <View style={global.card}>
        <Text style={global.h1}>Test Page</Text>
      </View>
      <ButtonSimple label="TEST PAGE" callback={() => {}} />
    </ScrollView>
  );
}
