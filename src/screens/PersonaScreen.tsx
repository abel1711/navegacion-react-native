import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//     id: number;
//     nombre: string;
// };

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {};

export const PersonaScreen = ({route, navigation}: Props) => {

    const {addUser} = useContext( AuthContext )

    // const params = route.params as RouteParams; // para hacer el tipado mas rápido
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        addUser(params.nombre)
    }, [])
    
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(route.params, null, 3)
                }
            </Text>
        </View>
    )
}