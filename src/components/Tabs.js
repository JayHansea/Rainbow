import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'royalblue',
        tabBarInactiveTintColor: '#000',
      }}
    >
      <Tab.Screen 
        name="Current Weather" 
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
            name={focused ? 'cloud-check' : 'cloud-check-outline'} 
            size={25} 
            color={focused ? 'tomato' : '#000'}/>
        }}
      />
      <Tab.Screen 
        name="Upcoming Weather" 
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
            name={focused ? 'timer' : 'timer-outline'} 
            size={25} 
            color={focused ? '#87cefa' : '#000'}/>
        }}
      />
      <Tab.Screen 
        name="City" 
        component={City}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
            name={focused ? 'city-variant' : 'city-variant-outline'} 
            size={25} 
            color={focused ? '#0f52ba' : '#000'}/>
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;