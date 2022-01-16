import { ScrollView, View, Text, StyleSheet } from "react-native";
import global, { colors, sizes } from "../../styles";
import ButtonIconName from "../../components/Button/IconName";
import HeaderCancelSave from "./HeaderCancelSave";

export default function SelectAccountCc({ navigation }) {
  function handleGoBack() {
    navigation.goBack();
  }

  function handleCc(id) {
    navigation.navigate("CreateTransaction.CcTransactionForm", {
      cc_id: id,
    });
  }

  function handleAccount(id) {
    navigation.navigate("CreateTransaction.AccountTransactionForm", {
      account_id: id,
    });
  }

  return (
    <View style={global.container}>
      <HeaderCancelSave
        leftPress={handleGoBack}
        title="Selecione a conta ou o cartão"
      />
      <ScrollView style={local.scrollView}>
        <Text style={global.h3}>Contas</Text>
        <ButtonIconName
          label="Banco X"
          callback={() => handleAccount(1)}
          iconName="home"
          iconColor={colors.background}
          iconBgColor={colors.foreground}
        />
        <ButtonIconName
          label="Banco Y"
          callback={() => handleAccount(2)}
          iconName="home"
          iconColor={colors.background}
          iconBgColor={colors.foreground}
        />

        <Text style={global.h3}>Cartões</Text>
        <ButtonIconName
          label="Cartão Teste"
          callback={() => handleCc(1)}
          iconName="home"
          iconColor={colors.background}
          iconBgColor={colors.foreground}
        />
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
