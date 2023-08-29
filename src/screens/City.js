import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground } from "react-native";
import IconText from "../components/IconText";

const City = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/city-background.jpg')}
				style={styles.imageLayout}
			>
				<Text style={[styles.cityName, styles.cityText]}>London</Text>
				<Text style={[styles.countryName, styles.cityText]}>UK</Text>
			<View style={[styles.populationWrapper, styles.rowLayout]}>
					<IconText 
						iconName={'user'} 
						iconColor={'white'} 
						bodyText={'8000'}
						bodyTextStyles={styles.populationText}
					/>
				</View>
				<View style={[styles.riseSetWrapper, styles.rowLayout]}>
				<IconText 
						iconName={'sunrise'} 
						iconColor={'white'} 
						bodyText={'17:59:10pm'} 
						bodyTextStyles={styles.riseSetText}
					/>
					<IconText 
						iconName={'sunset'} 
						iconColor={'white'} 
						bodyText={'07:45:09am'}
						bodyTextStyles={styles.riseSetText}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f52ba',
	},
	imageLayout: {
		flex: 1,
		// marginTop: StatusBar.currentHeight || 0,
	},
	cityName: {
		fontSize: 40,
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