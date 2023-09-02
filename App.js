import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();
  
  if (weather && weather.list && !loading)  {
    return (
      <NavigationContainer>
        <Tabs weather={weather} error={error}/>
      </NavigationContainer>
    )
  }

  return ( 
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <View>
          <ActivityIndicator size={'large'} color={'royalblue'} />
          <Text style={styles.loadingText}>Fetching real time weather data</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
  loadingText: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#fff'
  }
})

export default App;