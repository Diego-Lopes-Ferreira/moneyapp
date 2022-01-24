import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import global from "../../../styles";
import ButtonSimple from "../../../components/Button/Simple";

import { account } from "../../../api";
import { useFocusEffect } from "@react-navigation/core";

export default function ConfigAccountsPage({ route, navigation }) {
  const [accs, set_accs] = useState([]);

  async function fetchData() {
    let { _array } = await account.list();
    set_accs(_array);
  }

  useFocusEffect(() => {
    fetchData();
  });

  return (
    <View style={global.container}>
      <Text style={global.h1}>Contas</Text>
      <ButtonSimple
        label="Criar Nova Conta"
        callback={() => navigation.navigate("Config.Account.Form")}
      />
      <ScrollView>
        {accs.length > 0 ? (
          accs.map((acc, index) => <Text>{acc}</Text>)
        ) : (
          <Text style={global.text_normal}>Nenhuma Categoria</Text>
        )}
      </ScrollView>
    </View>
  );
}
