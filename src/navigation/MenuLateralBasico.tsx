import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Text, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const { width } = useWindowDimensions();
  
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false, // para mostrar o no el header
        headerStyle: {
          elevation: 0, // para borrar la linea de abajo en android
          shadowColor: 'transparent', // para borrar la linea de abajo en ios
          backgroundColor: '#3A96F8',
        },
        drawerPosition: 'left',// para elegir de donde sale el drawer
        drawerType: ( width >= 768 ) ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name='StackNavigator' component={StackNavigator} options={{ title: 'Home' }}/>
      <Drawer.Screen name='SettingsScreen' component={SettingsScreen} options={{ title: 'Settings' }}/>
    </Drawer.Navigator>
  )

}
