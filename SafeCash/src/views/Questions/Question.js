import React, { useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import estiloQuestion from './estiloQuestion';

export default function Question({ navigation }) {
    
    const [nome, setNome] = useState("");

    return(
        <View style={estiloQuestion.container}>
            <Image source={require('../../../assets/Logotipo2.png')} style={estiloQuestion.logotipo}/>
            <TextInput
                spellCheck={false}
                style={estiloQuestion.inputs}
                value={nome}
                onChangeText={text=>setNome(text)}
                placeholder="Como devemos lhe chamar ?"
                underlineColorAndroid="transparent"
            />

            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Inicial')}>
                <Image style={estiloQuestion.imgSeta} source={require('../../../assets/buttonSet.png')}/>
            </TouchableOpacity>
        </View>
    );
}