import { StyleSheet } from "react-native";

const estiloQuestion = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#080808',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logotipo: {
      width: 150,
      height: 141
    },
    textQuestion: {
        color: 'white',
        fontSize: 17,
        marginTop: 10
    },
    inputs: {
        width: 155,
        height: 30,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 2,
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#434343',
        fontSize: 17
    },
    imgSeta: {
        width: 55,
        height: 34,
        margin: 15
    }
});
export default estiloQuestion;