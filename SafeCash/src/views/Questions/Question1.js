import React, { useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import estiloQuestion from './estiloQuestion';

export default function Question1({ navigation }) {
    
    const [nome, setNome] = useState("");

    return(
        <View style={estiloQuestion.container}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloQuestion.logotipo}/>
            <Text style={estiloQuestion.textQuestion}>Como devemos lhe chamar ?</Text>
            <TextInput
                spellCheck={false}
                style={estiloQuestion.inputs}
                value={nome}
                onChangeText={text=>setNome(text)}
                placeholder="Digite Aqui..."
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Question2')}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </View>
    );
}