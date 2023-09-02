import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarActiveTintColor: 'royalblue',
      //   tabBarInactiveTintColor: '#000',
      // }}
    >
      <Tab.Screen 
        name="Current Weather" 
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
            name={focused ? 'cloud-check' : 'cloud-check-outline'} 
            size={25} 
            color={focused ? '#fff' : '#fff'}/>,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#000'
          },
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Upcoming Weather" 
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
            name={focused ? 'timer' : 'timer-outline'} 
            size={25} 
            color={focused ? '#fff' : '#fff'}/>,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#000'
          },
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen 
        name="City" 
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
            name={focused ? 'city-variant' : 'city-variant-outline'} 
            size={25} 
            color={focused ? '#fff' : '#fff'}/>,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#000'
          },
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs;