import * as React from 'react';
import {Home, PromoPage} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PromoPage" component={PromoPage} />
    </Stack.Navigator>
  );
}
