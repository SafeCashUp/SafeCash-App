import React, { useState } from 'react'
import estiloQuestion from './estiloQuestion';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Question2() {
    const [renda, setRenda] = useState("");

    return(
        <View style={estiloQuestion.container}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloQuestion.logotipo}/>
            <Text style={estiloQuestion.textQuestion}>Qual sua renda mensal ?</Text>
            <TextInput
                style={estiloQuestion.inputs}
                value={renda}
                onChangeText={text=>setRenda(text)}
                placeholder="Digite Aqui..."
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </View>
    );
}