import { View, Image } from "react-native";
import { styles } from "./ForecastListItem.style";
import { Txt } from "../Txt/Txt";

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Txt style={styles.day}>{day}</Txt>
      <Txt style={styles.date}>{date}</Txt>
      <Txt styles={styles.temperature}>{temperature}°</Txt>
    </View>
  );
}
