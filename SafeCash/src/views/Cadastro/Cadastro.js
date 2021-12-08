import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import estiloCadastro from './estiloCadastro';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);


    return(
        <View style={estiloCadastro.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../../../assets/FundoApp.png')} style={estiloCadastro.fundoApp}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloCadastro.logotipo}/>
            {/* NOME */}
            <View style={estiloCadastro.centeredInput}>
                <TextInput
                    spellCheck={false}
                    style={estiloCadastro.inputs}
                    value={usuario}
                    onChangeText={text=>setUsuario(text)}
                    placeholder="Usuário"
                    underlineColorAndroid="transparent"
                />
            </View>
            {/* SENHA */}
            <View style={estiloCadastro.centeredInput}>
                <TextInput
                    spellCheck={false}
                    style={estiloCadastro.inputs}
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
            {/* CONFIRMAR SENHA */}
            <View style={estiloCadastro.centeredInput}>
                <TextInput
                    spellCheck={false}
                    style={estiloCadastro.inputs}
                    value={confirmarSenha}
                    onChangeText={text=>setConfirmarSenha(text)}
                    placeholder="Confirmar Senha"
                    underlineColorAndroid="transparent"
                    secureTextEntry={hidePass2}
                />
                <TouchableOpacity onPress={() => {setHidePass2(!hidePass2)}} activeOpacity={0.5}>
                    <Ionicons name="eye" size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Question')} activeOpacity={0.5}>
                <Image style={estiloCadastro.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </ImageBackground>
        </View>
    );
}