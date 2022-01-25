import { useState, useCallback, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import global from "../../../styles";
import ButtonSimple from "../../../components/Button/Simple";

import { account } from "../../../api";
import { useIsFocused } from "@react-navigation/native";

export default function ConfigAccountsPage({ route, navigation }) {
  const isFocused = useIsFocused();
  const [accs, set_accs] = useState([]);

  async function fetchData() {
    let { _array } = await account.list();
    set_accs(_array);
  }

  useEffect(() => {
    fetchData();
  }, [isFocused]);

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
          <Text style={global.text_normal}>Nenhuma Conta</Text>
        )}
      </ScrollView>
    </View>
  );
}
