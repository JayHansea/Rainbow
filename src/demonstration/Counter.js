import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button 
        color={'green'} 
        title={'increase count'} 
        onPress={() => {
            setCount(count + 1)
          }
        } 
      />
      <Button 
        color={'red'} 
        title={'decrease count'} 
        onPress={() => {
          setCount(count - 1)
          }
        } 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
  }
})

export default Counter;