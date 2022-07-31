import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerHeaderProps } from '@react-navigation/drawer';
import { Button, Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { colors, styles } from '../theme/appTheme';
import { Tabs } from './BottomTabs';
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false, // para mostrar o no el header
                headerStyle: {
                    elevation: 0, // para borrar la linea de abajo en android
                    shadowColor: 'transparent', // para borrar la linea de abajo en ios
                    backgroundColor: colors.primary,
                },
                drawerPosition: 'left',// para elegir de donde sale el drawer
                drawerType: (width >= 768) ? 'permanent' : 'front', // para dejarlo fijo o no segun el width
                header: (props) => (<HeaderDrawer {...props} />)
            }}
            drawerContent={(props) => <MenuInterno {...props} />} // para customizar el drawer a nuestro parecer

        >
            <Drawer.Screen name='MaterialBottomTabs' options={{ title: 'Tabs' }} component={Tabs} />
            <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
        </Drawer.Navigator>
    )

}


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (

        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://png.pngtree.com/png-vector/20210604/ourlarge/pngtree-gray-avatar-placeholder-png-image_3416697.jpg'
                    }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MaterialBottomTabs')}
                    style={styles.menuBoton}
                >
                    <Icon name='list-outline' size={40} color={colors.primary} />
                    <Text
                        style={styles.menuTexto}
                    >
                        Tabs
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                    style={styles.menuBoton}
                >
                    <Icon name='settings-outline' size={40} color={colors.primary} />
                    <Text
                        style={styles.menuTexto}
                    >
                        Ajustes
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

const HeaderDrawer = ({ layout, navigation, route }: DrawerHeaderProps) => {
    
    const { authState: { username, isLoggedIn }, logout, signIn } = useContext(AuthContext)

    return (
        <View
            style={{
                width: layout.width,
                height: 50, backgroundColor: colors.primary,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
            <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => navigation.toggleDrawer()}
            >
                <Icon name='list-outline' size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {username}
            </Text>
            <Text
                style={{ marginRight: 20, fontSize: 20 }}
            >
                {
                    isLoggedIn ? <Button title='Logout' onPress={() => logout()} /> : <Button title='Sign In' onPress={() => signIn()} />
                }
                {route.name === 'SettingsScreen' ? 'Ajustes' : 'Tabs'}
            </Text>

        </View>
    )
}