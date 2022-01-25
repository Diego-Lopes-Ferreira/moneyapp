import { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import global, { sizes, colors } from "../../styles";
import ButtonSimple from "../Button/Simple";
import { Feather } from "@expo/vector-icons";
import { feather_icon_names } from "../../utils/feather_icons";

export default function IconPicker({ state, setState, label }) {
  const [show, set_show] = useState(false);
  const [dlist, set_dlist] = useState([]);
  const [search, set_search] = useState("");

  useEffect(() => {
    set_dlist(Object.keys(feather_icon_names));
  }, []);

  // TODO: Implement search of the icons
  // useEffect(() => {
  //   console.log("pesquisando");
  // }, [search]);

  function DButton({ item }) {
    return (
      <TouchableOpacity
        key={item}
        activeOpacity={0.7}
        onPress={() => {
          setState(item);
          set_show(false);
        }}
        style={local.btn}
      >
        <Feather name={item} size={sizes.xxxl} color={colors.foreground} />
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
        onRequestClose={() => {
          set_show(false);
        }}
      >
        <View style={local.modal}>
          <Text style={local.modaltxt}>{label}</Text>
          <TextInput
            value={search}
            onChangeText={set_search}
            style={local.input}
          />
          <FlatList
            style={local.modalScrollView}
            contentContainerStyle={local.modalScrollViewContentContainer}
            data={dlist}
            renderItem={DButton}
            horizontal={false}
            numColumns={5}
            keyExtractor={(item) => item}
          />
          {/*
          Performance issues...
          <ScrollView
            style={local.modalScrollView}
            contentContainerStyle={local.modalScrollViewContentContainer}
          >
            {dlist.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => set_show(false)}
                style={local.btn}
              >
                <Feather
                  name={item}
                  size={sizes.xxxl}
                  color={colors.foreground}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          */}
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
