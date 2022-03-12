import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import estiloLogin from './estiloLogin';
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
            <View style={estiloLogin.centeredInput}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Inicial', {name:usuario})} activeOpacity={0.5}>
                <Image style={estiloLogin.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </ImageBackground>
        </View>
    );
}
