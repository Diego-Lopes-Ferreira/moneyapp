import { StyleSheet, ScrollView, View, Text } from "react-native";
import ButtonIconName from "../../components/Button/IconName";
import global, { sizes, colors } from "../../styles";
import HeaderCancelSave from "./HeaderCancelSave";

export default function SelectCategory({ route, navigation }) {
  const { data } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSelectCategory(id) {
    data.category = id;
    console.log(data);
    // TODO: save "data" on database
  }

  return (
    <View style={global.container}>
      <HeaderCancelSave
        leftPress={handleGoBack}
        title="Selecione a categoria"
      />
      <ScrollView style={local.scrollView}>
        <ButtonIconName
          label="Banco X"
          callback={() => handleSelectCategory(123)}
          iconName="droplet"
          iconSize={sizes.l}
          iconColor={colors.foreground}
          iconBgColor={colors.red}
        />
      </ScrollView>
    </View>
  );
}

const local = StyleSheet.create({
  txt: {
    ...global.h1,
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: sizes.s,
  },
});
