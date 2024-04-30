import { Text, View } from "react-native";
import { style } from "./Home.style";
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";

export function Home({ weather, city }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );

  return (
    <>
      <View style={style.meteo_basic}>
        <MeteoBasic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
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
