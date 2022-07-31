import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const namesIcons=['rocket-outline','airplane-outline','earth-outline','code-slash-outline','logo-react','logo-javascript'];

    return (
        <View style={ {...styles.globalMargin, flex: 1, backgroundColor: 'white'}}>
            <Text style={ styles.title}>
                Iconos
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {/* <Icon name="rocket-outline" size={60} color={colors.primary} />
                <Icon name="airplane-outline" size={60} color={colors.primary} />
                <Icon name="earth-outline" size={60} color={colors.primary} />
                <Icon name="code-slash-outline" size={60} color={colors.primary} />
                <Icon name="logo-react" size={60} color={colors.primary} />
                <Icon name="logo-javascript" size={60} color={colors.primary} /> */}

                {
                    namesIcons.map( icon => (
                        <TouchableIcon iconName={ icon } key={icon}/>
                    ))
                }
            </View>
        </View>
    )
}
