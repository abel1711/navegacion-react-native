import { StyleSheet } from "react-native";

export const colors = {
    primary: '#3A96F8',
    secondary: '#5856d6',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        color: 'black'
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginLeft: 50,
    },
    menuBoton: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuTexto: {
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 15
    }
})