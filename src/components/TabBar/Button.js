import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import { colors, sizes } from "../../styles";

export default function TabBarButton({ isFocused, route, label, navigation }) {
  const fgColor = isFocused ? colors.background : colors.backgroundLight + "99";
  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      style={local.tabBarIcon}
    >
      <Feather name="home" color={fgColor} size={sizes.xl} />
      <Text style={{ color: fgColor }}>{label}</Text>
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  tabBarIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
