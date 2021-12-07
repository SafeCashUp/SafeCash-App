import { StyleSheet } from "react-native";
import { vw } from 'react-native-expo-viewport-units';

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1
    },
    centeredModal: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerModal: {
        backgroundColor: 'white',
        width: 310,
        height: 400,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13
    },
    menuModal: {
        flexDirection: 'row',
        width: '100%',
        height: 30,
        backgroundColor: '#151515',
        borderTopWidth: 1,
        borderColor: '#151515'
        
    },
    itensMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 70,
        height: 30,
    },
    textoMenu: {
        color: 'gainsboro',
        fontSize: 13,
        fontWeight: 'bold'
    },
    positionFecharModal: {
        position: 'absolute',
        right: 3,
        top: 3
    },
    conteudoModal: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
    tituloModal: {
        fontSize: 30,
        color: '#FF781F',
        fontWeight: 'bold'
    },
    centeredInput: {
        padding: 30,
        marginTop: 25,
        width: '100%',
        height: '100%'
    },
    textoInput: {
        fontSize: 15,
        color: '#151515',
        fontWeight: 'bold'
    },
    inputs: {
        marginBottom: 15,
        marginTop: 10,
        borderColor: 'gainsboro',
        height: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3,
        borderBottomWidth: 1,
    },
    botaoInput: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        right: 65,
        left: 65,
        marginTop: 105,
        width: 85,
        height: 35,
        backgroundColor: '#FF871F'
    },
    positionButtomObj: {
        bottom: 65
    },
    textoBotaoInput: {
        fontSize: 13,
        color: 'gainsboro',
        fontWeight: 'bold'
    },
    containerScrollView: {
        flex: 1,
        flexDirection: 'column',
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
    centeredBlocoConteudo: {
        position: 'relative',
        top: -40,
        right: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blocoConteudo: {
        marginBottom: 35,
        padding: 10,
        height: 250,
        width: vw(60),
        minWidth: 280,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13
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
    positionAdicionar: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    botaoVerMais: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#FF781F',
        paddingLeft: 5,
        width: 78,
        height: 30
    },
    textVerMais: {
        right: 0,
        left: -3,
        color: '#FF781F',
        fontWeight: '600'
    },
    botaoAdicionar: {
        width: 50,
        height: 50
    }
});
export default estiloInicial;