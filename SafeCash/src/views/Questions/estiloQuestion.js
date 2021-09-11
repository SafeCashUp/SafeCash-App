import { StyleSheet } from "react-native";

const estiloQuestion = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#151515',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logotipo: {
      width: 150,
      height: 141,
      marginBottom: 10
    },
    textQuestion: {
        color: 'white',
        fontSize: 17,
        marginTop: 10
    },
    inputs: {
        borderWidth: 1,
        borderColor: '#FF781F',
        width: 235,
        height: 40,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#434343',
        fontSize: 17,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
    },
    imgSeta: {
        width: 55,
        height: 34,
        margin: 15
    }
});
export default estiloQuestion;