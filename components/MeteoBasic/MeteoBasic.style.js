import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_txt: {
    fontSize: 20,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature: {
    fontSize: 150,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "white",
  },
});
