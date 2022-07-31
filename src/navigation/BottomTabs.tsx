import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { colors } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';
export const Tabs = ()=>{

    return (Platform.OS === 'ios') ? <TabsIOS /> : <MaterialBottomTabsAndroid />

}

const BottomTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {

    return (
        <BottomTabsIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            
            screenOptions={ ({route})=> ({
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: 20
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarIcon: ( {color, focused, size})=>{

                    let iconName: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;
                        case 'TopTabNavigator':
                            iconName = 'TT'
                            break;
                        case 'StackNavigator':
                            iconName = 'St'
                            break;
                    
                        default:
                            break;
                    }
                    return (
                        <Text style={{ color }}>{ iconName }</Text>
                    )
                }
            })}
        >
            <BottomTabsIOS.Screen name="Tab1Screen" options={{ title: 'Iconos'}} component={Tab1Screen} />
            <BottomTabsIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2'}} component={TopTabNavigator} />
            <BottomTabsIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
        </BottomTabsIOS.Navigator>
    );
}

const TabAndroid = createMaterialBottomTabNavigator()


const MaterialBottomTabsAndroid = () => {

    return (
        <TabAndroid.Navigator
            sceneAnimationEnabled={ true }
            screenOptions={ ({route})=> ({
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: 20
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarIcon: ( { color })=>{

                    let iconName: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'flower-outline'
                            break;
                        case 'TopTabNavigator':
                            iconName = 'apps-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'logo-stackoverflow'
                            break;
                    
                        default:
                            break;
                    }
                    return (
                        <Icon name={iconName} size={20} color={color} />
                    )
                },

            })}
            barStyle={{
                backgroundColor: 'white'
            }}
            activeColor='black'
            inactiveColor='grey'
        >
            <TabAndroid.Screen name="Tab1Screen" options={{ title: 'Iconos'}} component={Tab1Screen} />
            <TabAndroid.Screen name="TopTabNavigator" options={{ title: 'Menú'}} component={TopTabNavigator} />
            <TabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
        </TabAndroid.Navigator>
    );
}