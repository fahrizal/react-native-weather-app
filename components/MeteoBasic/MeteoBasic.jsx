import { style } from "./MeteoBasic.style";
import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";

export function MeteoBasic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation();

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
        <TouchableOpacity
          onPress={() => nav.navigate("Forecasts", { city, ...dailyWeather })}
        >
          <Txt style={style.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={style.image} source={interpretation.image} />
      </View>
    </>
  );
}
