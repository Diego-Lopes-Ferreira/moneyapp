import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import global, { colors, sizes } from "../../styles";

import ButtonIconName from "../../components/Button/IconName";
import HeaderCancelSave from "./HeaderCancelSave";

import { account, credit_cards } from "../../api";

export default function SelectAccountCc({ navigation }) {
  const isFocused = useIsFocused();
  const [accs, set_accs] = useState([]);
  const [ccs, set_ccs] = useState([]);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleCc(id) {
    navigation.navigate("CreateTransaction.CcTransactionForm", {
      cc_id: id,
    });
  }

  function handleAccount(id, acc) {
    navigation.navigate("CreateTransaction.AccountTransactionForm", {
      account_id: id,
      account: acc,
    });
  }

  async function fetchAccounts() {
    let { _array } = await account.list();
    set_accs(_array);
  }
  async function fetchCreditCards() {
    let { _array } = await credit_cards.list();
    set_ccs(_array);
  }

  useEffect(() => {
    fetchAccounts();
    fetchCreditCards();
  }, [isFocused]);

  return (
    <View style={global.container}>
      <HeaderCancelSave
        leftPress={handleGoBack}
        title="Selecione a conta ou o cartão"
      />
      <ScrollView style={local.scrollView}>
        <Text style={global.h3}>Contas</Text>
        {accs.length > 0 ? (
          accs.map((acc, index) => (
            <ButtonIconName
              key={index}
              label={acc.name}
              callback={() => handleAccount(acc.id, acc)}
              iconName={acc.icon}
              iconColor={colors.background}
              iconBgColor={acc.color}
            />
          ))
        ) : (
          <Text style={global.text_normal}>Nenhuma Conta</Text>
        )}
        <Text style={global.h3}>Cartões</Text>
        {ccs.length > 0 ? (
          ccs.map((cc, index) => (
            <ButtonIconName
              key={index}
              label={cc.name}
              callback={() => handleCc(cc.id)}
              iconName={cc.icon}
              iconColor={colors.background}
              iconBgColor={cc.color}
            />
          ))
        ) : (
          <Text style={global.text_normal}>Nenhum Cartão</Text>
        )}
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  scrollView: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
});
