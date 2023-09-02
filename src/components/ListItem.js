import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { WeatherType } from "../utilities/WeatherType";
import moment from "moment";

const ListItem = (props) => {
	const { dt_txt, min, max, condition } = props
  return (
	<View style={styles.item}>
		<View style={styles.dateTextWrapper}>
			<Feather name={WeatherType[condition].icon} size={40} color={'white'} />
			<Text style={[styles.text, styles.weatherName]}>{WeatherType[condition].name}</Text>
		</View>
		<View style={styles.dateTextWrapper}>
			<Text style={styles.text}>{moment(dt_txt).format('dddd')}</Text>
			<Text style={styles.text}>{moment().format('h:mm:ss a')}</Text>
		</View>
		<View style={styles.dateTextWrapper}>
			<Text style={styles.text}>
				{`Min Temp: ${Math.round(min)}`}
				<Text>&deg;C</Text>
			</Text>
			<Text style={styles.text}>
				{`Max Temp: ${Math.round(max)}`}
				<Text>&deg;C</Text>
			</Text>
		</View>
		
	</View>
	)
};

const styles = StyleSheet.create({
	item: {
		paddingVertical: 25,
		paddingHorizontal: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// borderWidth: 5,
		backgroundColor: 'rgba(0,0,0, 0.7)'
	},
	text: {
		color: 'white',
		fontSize: 15,
	},
	weatherName: {
		marginTop: 5,
		alignSelf: 'center'
	},
	dateTextWrapper: {
		flexDirection: 'column'
	}
})

export default ListItem;