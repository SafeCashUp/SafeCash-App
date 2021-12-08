import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity } from 'react-native';
import estiloQuestion from './estiloQuestion';
import { Ionicons } from '@expo/vector-icons';

export default function Question({ navigation }) {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);
    
    return(
        <View style={estiloQuestion.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../../../assets/FundoApp.png')} style={estiloQuestion.fundoApp}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloQuestion.logotipo}/>
            {/* NOME */}
            <View style={estiloQuestion.centeredInput}>
                <TextInput
                    spellCheck={false}
                    style={estiloQuestion.inputs}
                    value={usuario}
                    onChangeText={text=>setUsuario(text)}
                    placeholder="Usuário"
                    underlineColorAndroid="transparent"
                />
            </View>
            {/* SENHA */}
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
            
                <TextInput
                    spellCheck={false}
                    style={estiloQuestion.inputs}
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
            </Pressable>

            <TouchableOpacity onPress={() => navigation.navigate('Inicial')} activeOpacity={0.5}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </ImageBackground>
        </View>
        
        
    );
}
