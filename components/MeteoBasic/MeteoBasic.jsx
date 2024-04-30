import { style } from "./MeteoBasic.style";
import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt";

export function MeteoBasic({ temperature }) {
  return (
    <>
      <View style={style.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={style.city}>
        <Txt>City</Txt>
      </View>
      <View style={style.interpretation}>
        <Txt style={style.interpretation_txt}>Sunny</Txt>
      </View>
      <View style={style.temperature_box}>
        <Txt style={style.temperature}>{temperature}°</Txt>
        <Image style={style.image} />
      </View>
    </>
  );
}
