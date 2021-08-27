import React, { useState } from 'react'
import estiloQuestion from './estiloQuestion';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Question1() {
    const [nome, setNome] = useState("");

    return(
        <View style={estiloQuestion.container}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloQuestion.logotipo}/>
            <Text style={estiloQuestion.textQuestion}>Como devemos lhe chamar ?</Text>
            <TextInput
                style={estiloQuestion.inputs}
                value={nome}
                onChangeText={text=>setNome(text)}
                placeholder="Digite Aqui..."
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </View>
    );
}