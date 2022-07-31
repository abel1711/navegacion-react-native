import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets(); // con esto obtengo las medidas del safe area

    const { authState, signIn, logout } = useContext(AuthContext); // así usamos nuestro context

    return (
        <View style={{ ...styles.globalMargin, marginTop: insets.top}}>
            <Text style={styles.title}>Settings Screen!!!</Text>
            <Text>
                {
                    JSON.stringify(authState, null, 4)
                }
            </Text>
            {
                authState.isLoggedIn ? <Button title='Logout' onPress={() => logout()} /> : <Button title='Sign In' onPress={() => signIn()} />
            }
            {
                authState.favoriteIcon && (
                           <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
                )
            }



        </View>
    )
}
