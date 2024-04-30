import { Text, useWindowDimensions } from "react-native";
import { styles } from "./Txt.style";
const IPHONE_13_RATIO = 0.00118483412322275;

export function Txt({ children, style, ...restProps }) {
  const fontSize = restProps.fontSize || styles.txt.fontSize;
  const { height } = useWindowDimensions();

  return (
    <Text style={[styles.txt, style]} {...restProps}>
      {children}
    </Text>
  );
}
