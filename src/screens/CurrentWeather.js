import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";


const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

  const weatherCondition = weather[0]?.main;

  // const toCelsius = (value) => {
  //   let celsius = value - 273.15
  //   let roundValue = Math.round(celsius);
  //   return roundValue;
  // }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={WeatherType[weatherCondition]?.backgroundImage} 
				style={styles.image}
      >
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={styles.container}>
            <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="white" />
            <Text style={styles.temp}>{temp}<Text>&deg;C</Text></Text>
            <Text style={styles.feels}>{`Feels like ${feels_like}`}<Text>&deg;C</Text></Text>
            <RowText
              messageOne={`High: ${temp_max} `}
              messageTwo={` Low: ${temp_min}`}
              containerStyles={styles.highLowWrapper}
              messageOneStyles={styles.highLow}
              messageTwoStyles={styles.highLow}
            />
          </View>
          <RowText 
              messageOne={weather[0]?.description}
              messageTwo={WeatherType[weatherCondition]?.message}
              containerStyles={styles.bodyWrapper}
              messageOneStyles={styles.description}
              messageTwoStyles={styles.message}
            />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
		flex: 1,
	},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    color: 'white',
    fontSize: 30,
  },
  highLow: {
    color: 'white',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 40,
    color: 'white',
  },
  message: {
    fontSize: 25,
    color: 'white',
  }
})

export default CurrentWeather;