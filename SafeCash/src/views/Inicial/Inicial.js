import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import estiloInicial from './estiloInicial';

export default function() {
    return (
        
        <View style={estiloInicial.container}>
            <ScrollView style={estiloInicial.containerScrollView}>
                <View style={estiloInicial.header}>
                    <View style={estiloInicial.cabecalho}>
                        <View style={estiloInicial.logoHello}>
                            <Image source={require('../../../assets/logo.png')} style={estiloInicial.logoHeader}/>
                            <Text style={estiloInicial.Hello}>Olá {"\n"}Vitudomingues</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image style={estiloInicial.visible} source={require('../../../assets/visibility.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estiloInicial.centeredBlocoConteudo}>
                    <View style={estiloInicial.blocoConteudo}>
                        <Text style={estiloInicial.textTitle}>Resumo</Text>
                        <View style={estiloInicial.saldo}>
                            <Text style={estiloInicial.textSaldo}>Saldo geral</Text>
                            <Text style={estiloInicial.valorSaldo}>R$ 456,46</Text>
                        </View>

                        <View style={estiloInicial.linha} />

                        <View style={estiloInicial.resumoMensal}>
                            <View style={estiloInicial.mensalReceita}>
                                <Text style={estiloInicial.textResumo}>Receita Mensal</Text>
                                <Text style={estiloInicial.valor}>R$ 150,00</Text>
                            </View>
                            <View style={estiloInicial.mensalDespesa}>
                                <Text style={estiloInicial.textResumo}>Despesa Mensal</Text>
                                <Text style={estiloInicial.valor}>R$ 36,50</Text>                        
                            </View>
                        </View>

                        <View style={estiloInicial.linha} />

                        <View style={estiloInicial.positionButton}>
                            <TouchableOpacity style={estiloInicial.botaoVerMais} activeOpacity={0.5}>
                                <Text style={estiloInicial.textVerMais}>Ver Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={estiloInicial.blocoConteudo}>

                    </View>
                </View>
            </ScrollView>

            <View style={estiloInicial.positionAdicionar}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={estiloInicial.botaoAdicionar} source={require('../../../assets/add.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}