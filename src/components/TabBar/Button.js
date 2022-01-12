import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import { colors, sizes } from "../../styles";

export default function TabBarButton({
  state,
  route,
  index,
  descriptors,
  navigation,
}) {
  const { options } = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={local.tabBarIcon}
    >
      <Feather
        name="home"
        color={isFocused ? colors.background : colors.backgroundLight + "99"}
        size={sizes.xl}
      />
      <Text
        style={{
          color: isFocused ? colors.background : colors.backgroundLight + "99",
        }}
      >
        {label}
      </Text>
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
