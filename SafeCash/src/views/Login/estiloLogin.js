import { StyleSheet } from "react-native";
import { vw, vh } from 'react-native-expo-viewport-units';

const estiloQuestion = StyleSheet.create({
    container: {
        flex: 1
    },
    fundoApp: {
        backgroundColor: '#151515',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
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
    centeredInput: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FF781F',
        width: 235,
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white'
    },
    inputs: {
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