import { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

import global, { colors } from "../../../styles";

import ButtonSimple from "../../../components/Button/Simple";
import Account from "../../../components/Account";

import { account } from "../../../api";

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
      <ScrollView contentContainerStyle={local.scrollview}>
        {accs.length > 0 ? (
          accs.map((acc, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Config.Account.Form", {
                  account: acc,
                })
              }
              key={index}
            >
              <Account
                iconName={acc.icon}
                name={acc.name}
                description={acc.description}
                value={acc.balance}
                bgColor={acc.color}
                hasBorder={index != accs.length - 1}
              />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={global.text_normal}>Nenhuma Conta</Text>
        )}
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  scrollview: {
    ...global.card,
    width: "100%",
  },
});
