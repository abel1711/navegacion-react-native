import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary
            },
            tabBarStyle:{
                elevation: 0, // Para quitar la linea en Android
                shadowColor: 'transparent' //para quitar la linea el IOS
            },
            tabBarIcon: ({color})=>{

                let iconName:string = '';

                switch (route.name) {
                    case 'ChatScreen':
                        iconName = 'chatbubbles-outline'
                        break;
                    case 'ContactsScreen':
                        iconName = 'call-outline'
                        break;
                    case 'AlbumsScreen':
                        iconName = 'albums-outline'
                        break;
                
                    default:
                        break;
                }

                return <Icon name={iconName} size={20} color={color} />
            }
        })}
        style={{
            paddingTop: top,
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}

    >
      <Tab.Screen name="ChatScreen" options={{title: 'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{title: 'Contact'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title: 'Album'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}