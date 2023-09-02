import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMsg}>Sorry something went wrong</Text>
            <Feather name={'frown'} size={80} color={'white'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    errorMsg: {
        color: 'white',
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 30,
        textAlign: 'center'
    }
});

export default ErrorItem;