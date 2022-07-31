import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigation/StackNavigator';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './src/navigation/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
