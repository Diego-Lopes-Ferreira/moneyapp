import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import global, { sizes, colors } from "../../styles";

import ButtonSimple from "../Button/Simple";

import categories_colors from "../../utils/categories_colors";

export default function ColorPicker({ icon, setState, label }) {
  const [show, set_show] = useState(false);

  function DButton({ item }) {
    return (
      <TouchableOpacity
        key={item}
        activeOpacity={0.7}
        onPress={() => {
          setState(item);
          set_show(false);
        }}
        style={[local.btn, { backgroundColor: item }]}
      >
        <Feather name={icon} size={sizes.xxxl} color={colors.foreground} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={local.container}>
      <ButtonSimple label={label} callback={() => set_show(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => set_show(false)}
      >
        <View style={local.modal}>
          <Text style={local.modaltxt}>{label}</Text>
          <FlatList
            style={local.modalScrollView}
            contentContainerStyle={local.modalScrollViewContentContainer}
            data={categories_colors}
            renderItem={DButton}
            horizontal={false}
            numColumns={5}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
}

const iconSize = sizes.xxxl * 2;

const local = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  modal: {
    position: "absolute",
    backgroundColor: colors.foregroundDarker,
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  modaltxt: {
    ...global.h3,
    textAlign: "center",
    color: colors.background,
    marginVertical: sizes.s,
  },
  input: {
    alignSelf: "stretch",
    padding: sizes.s,
    marginHorizontal: sizes.s,
    marginTop: sizes.xs,
    color: colors.background,
    borderRadius: sizes.s,
    borderColor: colors.background,
    borderWidth: 1,
  },
  modalScrollView: {
    backgroundColor: colors.foreground,
    paddingHorizontal: sizes.s,
  },
  modalScrollViewContentContainer: {
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    width: iconSize,
    height: iconSize,
    margin: sizes.xxs,
    borderRadius: iconSize,
  },
  txt: {
    ...global.h1,
  },
});
