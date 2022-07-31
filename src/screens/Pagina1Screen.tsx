import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}; // para cuando usamos el stackNavigator
interface Props extends DrawerScreenProps<any, any> {}; // para cuando usamos el drawerNavigator

export const Pagina1Screen = ( { navigation }: Props) => {


  // estas lineas de código son para agragar el boton del toggle para el drawer
  
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft:()=>(
  //       <Button 
  //         title='Menu'
  //         onPress={()=> navigation.toggleDrawer()}
  //       />
  //     ) 
  //   })
  // }, []);
  
  
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            Pagina1Screen
        </Text>
        <Button 
          title='Ir a la pagina 2'
          onPress={ ()=> navigation.navigate( 'Pagina2Screen' )}
        />
    </View>
  )
}
