import { TouchableOpacity, View } from "react-native";
import { styles } from "./Header.style";
import { Txt } from "../Txt/Txt";
import { useNavigation } from "@react-navigation/native";

export function Header({ city }) {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back_btn} onPress={nav.goBack}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={styles.header_txts}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={styles.subtitle}>7 days Forecasts</Txt>
      </View>
    </View>
  );
}
