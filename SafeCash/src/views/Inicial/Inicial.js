import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import estiloInicial from './estiloInicial';

import { AntDesign } from '@expo/vector-icons';

export default function() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={estiloInicial.container}>

            <Modal isVisible={modalVisible}>
                <View style={estiloInicial.centeredModal}>
                    <View style={estiloInicial.containerModal}>
                        <Text>Testando a Modal!</Text>
                        <View style={estiloInicial.positionFecharModal}>
                            <Pressable onPress={() => {setModalVisible(false)}}>
                                <AntDesign name="close" size={24} color="gray" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <ScrollView style={estiloInicial.containerScrollView}>
                <View style={estiloInicial.header}>
                    <View style={estiloInicial.cabecalho}>
                        <View style={estiloInicial.logoHello}>
                            <Image source={require('../../../assets/logo.png')} style={estiloInicial.logoHeader} />
                            <Text style={estiloInicial.Hello}>Olá {"\n"}Vitudomingues</Text>
                        </View>
                        <Pressable>
                            <Image style={estiloInicial.visible} source={require('../../../assets/visibility.png')} />
                        </Pressable>
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
                            <Pressable style={estiloInicial.botaoVerMais}>
                                <Text style={estiloInicial.textVerMais}>Ver Mais</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={estiloInicial.blocoConteudo}>

                    </View>
                </View>
            </ScrollView>

            <View style={estiloInicial.positionAdicionar}>
                <Pressable onPress={() => {setModalVisible(true)}}>
                    <Image style={estiloInicial.botaoAdicionar} source={require('../../../assets/add.png')} />
                </Pressable>
            </View>
        </View>
    );
}