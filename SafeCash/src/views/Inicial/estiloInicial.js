import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'gainsboro'
    },
    header: {
        height: 180,
        width: '100%',
        backgroundColor: '#151515',
        borderBottomWidth: 3,
        borderBottomColor: '#FF8000'
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 80
    },
    visible: {
        width: 23,
        height: 23
    },
    logoHello: {
        flexDirection: 'row',
    },
    Hello: {
        fontSize: 16,
        color: 'white',
        paddingLeft: 15
    },
    logoHeader: {
        width: 45,
        height: 42
    },
    carteira: {
        position: 'absolute',
        top: 140,
        height: 250,
        width: 280,
        backgroundColor: 'white',
        borderRadius: 15
    }
});
export default estiloInicial;