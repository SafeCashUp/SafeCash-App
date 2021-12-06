import React, { useState } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import estiloInicial from './estiloInicial';

import { AntDesign } from '@expo/vector-icons';

export default function() {
    // Controle da visibilidade das modais
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    // Controle do gasto
    const [gasto, setGasto] = useState("");

    // Controle da receita
    const [receita, setReceita] = useState("");

    // Controle da despesa
    const [despesa, setDespesa] = useState("");

    // Controle de objetivo
    const [nomeObjetivo, setNomeObjetivo] = useState("");

    return (
        <View style={estiloInicial.container}>

            {/* Modal Gasto */}
            <Modal isVisible={modalVisible}>
                <View style={estiloInicial.centeredModal}>
                    <View style={estiloInicial.containerModal}>
                        <View style={estiloInicial.menuModal}>
                            {/* ModalVisible */}
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>GASTO</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible2(true), setModalVisible(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>RECEITA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible3(true), setModalVisible(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>DESPESA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible4(true), setModalVisible(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>OBJETIVO</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={estiloInicial.positionFecharModal}>
                            <Pressable onPress={() => {setModalVisible(false)}}>
                                <AntDesign name="close" size={24} color="gray" />
                            </Pressable>
                        </View>
                        <View style={estiloInicial.conteudoModal}>
                            <Text style={estiloInicial.tituloModal}>Adicionar Gasto</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal Receita */}
            <Modal isVisible={modalVisible2}>
                <View style={estiloInicial.centeredModal}>
                    <View style={estiloInicial.containerModal}>
                        <View style={estiloInicial.menuModal}>
                            <TouchableOpacity onPress={() => {setModalVisible(true), setModalVisible2(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>GASTO</Text>
                                </View>
                            </TouchableOpacity>

                            {/* ModalVisible2 */}
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>RECEITA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible3(true), setModalVisible2(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>DESPESA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible4(true), setModalVisible2(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>OBJETIVO</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={estiloInicial.positionFecharModal}>
                            <Pressable onPress={() => {setModalVisible2(false)}}>
                                <AntDesign name="close" size={24} color="gray" />
                            </Pressable>
                        </View>
                        <View style={estiloInicial.conteudoModal}>
                            <Text style={estiloInicial.tituloModal}>Adicionar Receita</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal Despesa */}
            <Modal isVisible={modalVisible3}>
                <View style={estiloInicial.centeredModal}>
                    <View style={estiloInicial.containerModal}>
                        <View style={estiloInicial.menuModal}>
                            <TouchableOpacity onPress={() => {setModalVisible(true), setModalVisible3(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>GASTO</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible2(true), setModalVisible3(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>RECEITA</Text>
                                </View>
                            </TouchableOpacity>

                            {/* ModalVisible3 */}
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>DESPESA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible4(true), setModalVisible3(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>OBJETIVO</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={estiloInicial.positionFecharModal}>
                            <Pressable onPress={() => {setModalVisible3(false)}}>
                                <AntDesign name="close" size={24} color="gray" />
                            </Pressable>
                        </View>
                        <View style={estiloInicial.conteudoModal}>
                            <Text style={estiloInicial.tituloModal}>Adicionar Despesa</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal Objetivo */}
            <Modal isVisible={modalVisible4}>
                <View style={estiloInicial.centeredModal}>
                    <View style={estiloInicial.containerModal}>
                        <View style={estiloInicial.menuModal}>
                            <TouchableOpacity onPress={() => {setModalVisible(true), setModalVisible4(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>GASTO</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible2(true), setModalVisible4(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>RECEITA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible3(true), setModalVisible4(false)} } activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>DESPESA</Text>
                                </View>
                            </TouchableOpacity>

                            {/* ModalVisible4 */}
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={estiloInicial.itensMenu}>
                                    <Text style={estiloInicial.textoMenu}>OBJETIVO</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={estiloInicial.positionFecharModal}>
                            <Pressable onPress={() => {setModalVisible4(false)}}>
                                <AntDesign name="close" size={24} color="gray" />
                            </Pressable>
                        </View>
                        <View style={estiloInicial.conteudoModal}>
                            <Text style={estiloInicial.tituloModal}>Adicionar Objetivo</Text>
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