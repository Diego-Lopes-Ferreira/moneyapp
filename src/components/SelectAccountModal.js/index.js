import { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import global, { colors } from "../../styles";
import ButtonIconName from "../Button/IconName";
import ButtonSimple from "../Button/Simple";

export default function SelectAccountModal({ label, setState }) {
  const [show, setShow] = useState(false);
  function handleAccount(id) {
    setShow(false);
    setState(id);
  }

  return (
    <>
      {show ? (
        <View style={local.modal}>
          <ScrollView style={local.modalScrollView}>
            <Text style={local.modaltxt}>{label}</Text>
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
          </ScrollView>
        </View>
      ) : (
        <View style={local.container}>
          <ButtonSimple callback={() => setShow(true)} label={label} />
        </View>
      )}
    </>
  );
}

const local = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  modal: {
    position: "absolute",
    backgroundColor: colors.background,
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  modalScrollView: {
    backgroundColor: colors.foreground,
    flex: 1,
  },
  modaltxt: {
    ...global.text_normal,
    textAlign: "center",
    color: colors.background,
  },
  txt: {
    ...global.h1,
  },
});
