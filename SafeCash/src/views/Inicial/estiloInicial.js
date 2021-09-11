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
        borderBottomColor: '#FF781F'
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
        padding: 10,
        top: 140,
        height: 250,
        width: 280,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    textTitle: {
        fontSize: 20,
        color: '#FF781F',
        fontWeight: '600'
    },
    saldo: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10
    },
    textSaldo: {
        fontWeight: '500'
    },
    valorSaldo: {
        color: '#FF781F',
        fontSize: 20,
        fontWeight: '600'
    },
    resumoMensal: {
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
    },
    mensalReceita: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mensalDespesa: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textResumo: {
        fontWeight: '500'
    },
    valor: {
        color: '#FF781F',
        fontWeight: '600'
    },
    linha: {
        backgroundColor: '#b0b0b0',
        height: 1
    },
    positionButton: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    botaoVerMais: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#FF781F',
        paddingTop: 2,
        paddingRight: 5,
        paddingBottom: 2,
        paddingLeft: 5,
        width: 70
    },
    textVerMais: {
        color: '#FF781F'
    },
    postitionAdicionar: {
        alignItems: 'center'
    },
    botaoAdicionar: {
        position: 'absolute',
        left: 90,
        top: 240,

        width: 50,
        height: 50
    }

});
export default estiloInicial;