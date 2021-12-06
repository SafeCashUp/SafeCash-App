import { StyleSheet } from "react-native";

const estiloSobre = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 130,
        width: '100%',
        backgroundColor: '#FF781F'
    },
    headerLogo: {
        backgroundColor: '#151515',
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center'
    },
    logoTexto: {
        width: 200,
        height: 48,
    },
    containerConteudo: {
        padding: 30,
        backgroundColor: 'gainsboro'
    },
    titulo: {
        fontWeight: '700',
        fontSize: 25
    },
    linha:{
        width: '100%',
        backgroundColor: '#848585',
        marginBottom: 15,
        height: 1
    },
    texto: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'justify'
    },
    centeredFotos: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerFotos: {
        alignItems: 'center'
    },
    sombra: {
        
        marginBottom: 10,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        shadowColor: "#000",
        shadowOffset: {
	        width: 3,
	        height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13
    },
    imageFoto: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    nome: {
        fontSize: 20,
        fontWeight: '600',
        textShadowOffset: {width: -1, height: 1},
        textShadowColor: '#7F6E6E',
        textShadowRadius: 5
    },
    linhaNome: {
        marginBottom: 50,
        height: 2,
        backgroundColor: '#FF781F',
        width: '100%'
    },
    footer: {
        justifyContent: 'flex-end',
        width: '100%',
        height: 130,
        backgroundColor: '#FF781F'
    },
    rodape: {
        width: '100%',
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#151515'
    },
    textoFooter: {
        fontSize: 15,
        marginRight: 10,
        color: 'gainsboro'
    },
    imageFooter: {
        width: 80,
        height: 19
    }

});
export default estiloSobre;