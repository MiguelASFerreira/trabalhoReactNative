import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';

export const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='HomeScreen' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
