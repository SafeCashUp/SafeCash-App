import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

export default function() {
    return (
        <View style={estiloInicial.container}>
                <View style={estiloInicial.header}>
                    <View style={estiloInicial.cabecalho}>
                        <View style={estiloInicial.logoHello}>
                            <Image source={require('../../../assets/logo.png')} style={estiloInicial.logoHeader}/>
                            <Text style={estiloInicial.Hello}>Olá {"\n"}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image style={estiloInicial.visible} source={require('../../../assets/visibility.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estiloInicial.carteira}>
                    
                </View>
        </View>
    );
}