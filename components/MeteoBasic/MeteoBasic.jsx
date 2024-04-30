import { style } from "./MeteoBasic.style";
import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";

export function MeteoBasic({ temperature, interpretation, city }) {
  return (
    <>
      <View style={style.clock}>
        <Clock />
      </View>
      <View style={style.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={style.interpretation}>
        <Txt style={style.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={style.temperature_box}>
        <Txt style={style.temperature}>{temperature}°</Txt>
        <Image style={style.image} source={interpretation.image} />
      </View>
    </>
  );
}
