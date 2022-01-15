import { View } from "react-native";
import global from "../../styles";
import ButtonSimple from "../../components/Button/Simple";
import HeaderCancelSave from "./HeaderCancelSave";

export default function CreateTransactionCreateWhat({ navigation }) {
  function handleGoBack() {
    navigation.goBack();
  }

  function handleTransactions() {
    navigation.navigate("CreateTransaction.SelectAccountCc");
  }

  function handleTransference() {
    navigation.navigate("CreateTransaction.TransferenceForm");
  }

  return (
    <View style={global.container}>
      <HeaderCancelSave leftPress={handleGoBack} title="Selecione a operação" />
      <ButtonSimple label="Transação" callback={handleTransactions} />
      <ButtonSimple label="Transferência" callback={handleTransference} />
    </View>
  );
}
