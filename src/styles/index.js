import { StyleSheet } from "react-native";

const colors = {
  foreground: "#f0f0f0",
  background: "#181818",
  backgroundLight: "#363636",
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

const sizes = {
  xxxl: 32,
  xxl: 28,
  xl: 24,
  l: 20,
  m: 16,
  s: 12,
  xs: 8,
  xxs: 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: colors.backgroundLight,
    width: "90%",
    borderRadius: sizes.l,
    padding: sizes.s,
    margin: sizes.s,
  },
  rowGroup: {
    width: "100%",
    flexDirection: "row",
  },
  columnGroup: {
    height: "100%",
    flexDirection: "column",
  },
  h1: {
    color: colors.foreground,
    fontSize: sizes.xxxl,
  },
  h2: {
    color: colors.foreground,
    fontSize: sizes.xxl,
  },
  h3: {
    color: colors.foreground,
    fontSize: sizes.xl,
  },
  h4: {
    color: colors.foreground,
    fontSize: sizes.l,
  },
  text_normal: {
    color: colors.foreground,
    fontSize: sizes.m,
  },
  text_small: {
    color: colors.foreground,
    fontSize: sizes.s,
  },
});

export default styles;
