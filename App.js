import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import { Home } from './pages/Home/Home';
import { Forecasts } from './pages/Forecasts/Forecasts';
import { ImageBackground } from 'react-native';
import backgroundImg from './assets/background.png';
import { useEffect, useState } from 'react';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { MeteoAPI } from './api/meteo';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: 'transparent',
  },
};

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [isFontLoaded] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  useEffect(() => {
    getUserCoodinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords) {
    const cityResponse = await MeteoAPI.fetchCityWeatherByCoords(coords);
    setCity(cityResponse);
  }

  async function fetchCcoordsByCity(city) {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsByCity(city);
      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert('Ouch! ', err);
    }
  }

  async function getUserCoodinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync({});
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: 48.8566,
        lng: 2.3522,
      });
    }
  }

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={style.img}
        style={style.img_background}
        source={backgroundImg}
      >
        <SafeAreaProvider>
          <SafeAreaView style={style.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation: 'fade' }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCcoordsByCity}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
