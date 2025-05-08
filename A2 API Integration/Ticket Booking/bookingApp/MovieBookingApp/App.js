import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import BookingsScreen from './screens/BookingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MovieDetailScreen} />
        <Stack.Screen name="Bookings" component={BookingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
