import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import IconText from "../components/IconText";
import Logo from "../components/Logo";
import moment from "moment";

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/city-background.jpg')}
				style={styles.imageLayout}
			>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Logo />
          <View style={styles.container}>
            <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
            <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
              <IconText 
                iconName={'user'} 
                iconColor={'white'} 
                bodyText={`Population: ${population}`}
                bodyTextStyles={styles.populationText}
              />
            </View>
            <View style={[styles.riseSetWrapper, styles.rowLayout]}>
              <IconText 
                iconName={'sunrise'} 
                iconColor={'white'} 
                bodyText={moment(sunrise).format('h:mm:ss a')} 
                bodyTextStyles={styles.riseSetText}
              />
              <IconText 
                iconName={'sunset'} 
                iconColor={'white'} 
                bodyText={moment(sunset).format('h:mm:ss a')}
                bodyTextStyles={styles.riseSetText}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
	},
	imageLayout: {
		flex: 1,
	},
	cityName: {
		fontSize: 40,
    marginBottom: 10
	},
	countryName: {
		fontSize: 30,
	},
	cityText: {
		justifyContent: 'center',
		alignSelf: 'center',
		fontWeight: 'bold',
		color: 'white',
	},
	populationWrapper: {
		justifyContent: 'center',
	},
	populationText: {
		color: 'white',
		fontSize: 25,
		marginLeft: 7.5,
	},
	riseSetWrapper: {
		justifyContent: 'space-around',
	},
	rowLayout: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30,
	},
	riseSetText: {
		color: 'white',
		fontSize: 20,
		marginLeft: 10
	},
})

export default City;