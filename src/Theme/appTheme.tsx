import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        
    },
    calContainer:{
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor:'#9295fb',
        justifyContent: 'flex-end',
    },
    resultado: {
        color: 'white',
        fontSize: 50,
        textAlign: "right",
        marginBottom: 10,
    },
    resultadoPeq: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: "right",
    },
    boton: {
        height: 70,
        width: 70,
        backgroundColor: '#2D2D2D',
        borderRadius:100,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    botonTexto: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25, 
        padding: 10,
        fontWeight: 'bold'

    }
});
