import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ImageBackground, TextInput, Pressable } from 'react-native';

import estiloQuestion from './estiloQuestion';

export default function Question({ navigation }) {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    
    return(
        <View style={estiloQuestion.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../../../assets/FundoApp.png')} style={estiloQuestion.fundoApp}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloQuestion.logotipo}/>
            {/* NOME */}
            <TextInput
                spellCheck={false}
                style={estiloQuestion.inputs}
                value={usuario}
                onChangeText={text=>setUsuario(text)}
                placeholder="Usuário"
                underlineColorAndroid="transparent"
            />
            {/* SENHA */}
            <TextInput
                spellCheck={false}
                style={estiloQuestion.inputs}
                value={senha}
                onChangeText={text=>setSenha(text)}
                placeholder="Senha"
                underlineColorAndroid="transparent"
            />
        
            <Pressable onPress={() => navigation.navigate('Inicial')}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </Pressable>
        </ImageBackground>
        </View>
    );
}