import { Text } from "react-native";
import { styles } from "./Txt.style";

export function Txt({ children, style, ...restProps }) {
  return (
    <Text style={[styles.txt, style]} {...restProps}>
      {children}
    </Text>
  );
}
