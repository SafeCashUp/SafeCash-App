import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ImageBackground, TextInput, Pressable } from 'react-native';

import estiloCadastro from './estiloCadastro';

export default function Cadastro({ navigation }) {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    
    return(
        <View style={estiloCadastro.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../../../assets/FundoApp.png')} style={estiloCadastro.fundoApp}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloCadastro.logotipo}/>
            {/* NOME */}
            <TextInput
                spellCheck={false}
                style={estiloCadastro.inputs}
                value={usuario}
                onChangeText={text=>setUsuario(text)}
                placeholder="Usuário"
                underlineColorAndroid="transparent"
            />
            {/* SENHA */}
            <TextInput
                spellCheck={false}
                style={estiloCadastro.inputs}
                value={senha}
                onChangeText={text=>setSenha(text)}
                placeholder="Senha"
                underlineColorAndroid="transparent"
            />
            {/* CONFIRMAR SENHA */}
            <TextInput
                spellCheck={false}
                style={estiloCadastro.inputs}
                value={confirmarSenha}
                onChangeText={text=>setConfirmarSenha(text)}
                placeholder="Confirmar Senha"
                underlineColorAndroid="transparent"
            />
        
            <Pressable onPress={() => navigation.navigate('Question')}>
                <Image style={estiloCadastro.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </Pressable>
        </ImageBackground>
        </View>
    );
}