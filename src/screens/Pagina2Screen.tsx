import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const Pagina2Screen = ({ navigation }: Props) => {

    // useEffect(() => {
    //     navigation.setOptions({
    //       title: 'Hola mundo',//para cambiar el titulo de la página
    //       headerBackTitle: 'Atras',// para cambiar el mensaje del boton atrás
    //     })
    // }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button
                title='Ir pagina 3'
                onPress={() => navigation.navigate('Pagina3Screen')}
            />

            <Text
                style={{ marginVertical: 20, fontSize: 20 }}
            >Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#3FE4C8'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}

                >
                    <Text
                        style={styles.botonGrandeTexto}
                    >Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#ff9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}

                >
                    <Text
                        style={styles.botonGrandeTexto}
                    >Maria</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
