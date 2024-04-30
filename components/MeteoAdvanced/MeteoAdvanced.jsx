import { View } from "react-native";
import { Txt } from "../Txt/Txt";
import {
  StyledContainer,
  StyledLabel,
  StyledValue,
  styles,
} from "./MeteoAdvanced.style";

export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={styles.container}>
      <StyledContainer>
        <StyledLabel>{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{windspeed} km/h</StyledLabel>
        <StyledValue>Wind speed</StyledValue>
      </StyledContainer>
    </View>
  );
}
