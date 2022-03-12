import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

<<<<<<< HEAD:SafeCash/src/views/Login/Login.js
import { View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import estiloLogin from './estiloLogin';
=======
import { View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity } from 'react-native';
import estiloQuestion from './estiloQuestion';
>>>>>>> 1d3fbd13e343643ac58f21848cb17f1ab1c5cd32:SafeCash/src/views/Questions/Question.js
import { Ionicons } from '@expo/vector-icons';

export default function Question({ navigation }) {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);
    
    return(
        <View style={estiloLogin.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../../../assets/FundoApp.png')} style={estiloLogin.fundoApp}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloLogin.logotipo}/>
            {/* NOME */}
            <View style={estiloLogin.centeredInput}>
                <TextInput
                    spellCheck={false}
                    style={estiloLogin.inputs}
                    value={usuario}
                    onChangeText={text=>setUsuario(text)}
                    placeholder="Usuário"
                    underlineColorAndroid="transparent"
                />
            </View>
            {/* SENHA */}
<<<<<<< HEAD:SafeCash/src/views/Login/Login.js
            <View style={estiloLogin.centeredInput}>
=======
            <TextInput
                spellCheck={false}
                style={estiloQuestion.inputs}
                value={senha}
                onChangeText={text=>setSenha(text)}
                placeholder="Senha"
                underlineColorAndroid="transparent"
            />
            <Pressable onPress={() => navigation.navigate('Inicial', {name:usuario})}>
            <View style={estiloQuestion.centeredInput}>
            
>>>>>>> 1d3fbd13e343643ac58f21848cb17f1ab1c5cd32:SafeCash/src/views/Questions/Question.js
                <TextInput
                    spellCheck={false}
                    style={estiloLogin.inputs}
                    value={senha}
                    onChangeText={text=>setSenha(text)}
                    placeholder="Senha"
                    underlineColorAndroid="transparent"
                    secureTextEntry={hidePass}
                />
                <TouchableOpacity onPress={() => {setHidePass(!hidePass)}} activeOpacity={0.5}>
                    <Ionicons name="eye" size={24} color="gray" />  
                </TouchableOpacity>
            </View>
<<<<<<< HEAD:SafeCash/src/views/Login/Login.js
            <TouchableOpacity onPress={() => navigation.navigate('Inicial', {name:usuario})} activeOpacity={0.5}>
                <Image style={estiloLogin.imgSeta} source={require('../../../assets/buttonSet.png')}/>
=======
            </Pressable>

            <TouchableOpacity onPress={() => navigation.navigate('Inicial')} activeOpacity={0.5}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
>>>>>>> 1d3fbd13e343643ac58f21848cb17f1ab1c5cd32:SafeCash/src/views/Questions/Question.js
            </TouchableOpacity>
        </ImageBackground>
        </View>
        
        
    );
}
