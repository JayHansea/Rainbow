import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 22,
  },
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
  },
})

export default App;