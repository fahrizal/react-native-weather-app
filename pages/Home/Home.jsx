import { Text, View } from "react-native";
import { style } from "./Home.style";

export function Home() {
  return (
    <>
      <View style={style.meteo_basic}>
        <Text style={style.txt}>Basic Weather Info</Text>
      </View>
      <View style={style.searchbar}>
        <Text style={style.txt}>SearchBar</Text>
      </View>
      <View style={style.meteo_advanced}>
        <Text style={style.txt}>Advanced Weather Info</Text>
      </View>
    </>
  );
}
