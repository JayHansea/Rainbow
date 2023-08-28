import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
	const { bodyText, iconName, iconColor, bodyTextStyles } = props
	return (
		<View style={styles.iconTheme}>
			<Feather name={iconName} size={50} color={iconColor} />
			<Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textTheme: {
		fontWeight: 'bold',
	},
	iconTheme: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30,
	},
})

export default IconText;