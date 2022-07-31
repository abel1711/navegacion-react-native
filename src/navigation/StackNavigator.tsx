import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    Pagina1Screen: undefined;
    Pagina2Screen: undefined;
    Pagina3Screen: undefined;
    PersonaScreen: { id: number; nombre: string };
}

const Stack = createStackNavigator<RootStackParams>();// le asignamos el tipo para saber que recibe por las props.route.params cada ruta
//tambien nos sirve para definirle el nombre a cada ruta, si lo ponemos mal typescript nos lo va a hacer saber

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName='' para elegir por donde empezar
            screenOptions={{
                // headerShown: false, // para mostrar o no el header
                headerStyle:{
                    elevation: 0, // para borrar la linea de abajo en android
                    shadowColor: 'transparent' // para borrar la linea de abajo en ios
                    
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
                
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title:'Página 1'}} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title:'Página 2'}} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title:'Página 3'}} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title:'Persona'}} component={PersonaScreen} />
        </Stack.Navigator>
    );
}