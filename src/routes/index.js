import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome';
import { DetailsAnimes } from '../screens/Details';

const DrawerBar = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: "#e3ca0b",
      drawerActiveTintColor: "#000",
      drawerInactiveBackgroundColor: "gray",
      drawerInactiveTintColor: "#fff",
    }}>
      <Drawer.Screen name='Home' component={Home}/>
    </Drawer.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='Drawer' component={DrawerBar} />
        <Stack.Screen name='DetailsScreen' component={DetailsAnimes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
