import { Text, View } from "react-native";
import { style } from "./Home.style";
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";

export function Home({ weather }) {
  const currentWeather = weather.current_weather;
  return (
    <>
      <View style={style.meteo_basic}>
        <MeteoBasic temperature={Math.round(currentWeather.temperature)} />
      </View>
      <View style={style.searchbar}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={style.meteo_advanced}>
        <Txt>Advanced Weather Info</Txt>
      </View>
    </>
  );
}
