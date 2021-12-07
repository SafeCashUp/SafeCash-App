import React from 'react';
import estiloSobre from './estiloSobre';
import { View, Text, Image, ScrollView } from 'react-native';

export default function() {
    return (
        <ScrollView style={estiloSobre.container}>
            <View style={estiloSobre.header}>
                <View style={estiloSobre.headerLogo}>
                    <Image style={estiloSobre.logoTexto}source={require('../../../assets/TextoLogo2.png')} />
                </View>
            </View>
            <View style={estiloSobre.containerConteudo}>
                <Text style={estiloSobre.titulo}>OBJETIVO</Text>
                <View style={estiloSobre.linha}/>

                <Text style={estiloSobre.texto}>Permitir um planejamento financeiro de pessoas que tem o consumo desenfreado, mais comumente em jovens, através de um App, definindo metas e objetivos a curto e longo prazo, organizar o seu dinheiro destinando uma porcentagem para cada objetivo como gastos fixos, gastos pessoais e gastos para prioridades financeiras, proporcionando estabilidade financeira para alcançar seus sonhos e a capacidade de superar imprevistos.</Text>
                <Text style={estiloSobre.texto}>Os jovens até 20 anos estão começando a ter acesso efetivo a ferramentas de crédito, e estão assumindo o controle de suas finanças, entretanto, em sua maioria eles não tiveram acesso à educação financeira. O que faz com que ao terem dinheiro nas mãos acreditem que possam adquirir tudo que antes era impossível, utilizando parcelamento ou outras linhas de créditos que são na verdade dívidas. </Text>
                <Text style={estiloSobre.texto}>Gestão financeira pessoal significa mais do que pagar as contas em dia ou comprar o que você deseja: é preciso planejamento, organização e mira no futuro.</Text>
            
                <Text style={estiloSobre.titulo}>INTEGRANTES</Text>
                <View style={estiloSobre.linha} />

                <View style={estiloSobre.containerFotos}>

                    <View style={estiloSobre.centeredFotos}>
                        <View style={estiloSobre.sombra}>
                        <Image style={estiloSobre.imageFoto} source={require('../../../assets/fotos/primata4.png')} />
                        </View>
                        <Text style={estiloSobre.nome}>Vítor Pessoa</Text>
                    </View>
                    <View style={estiloSobre.linha} />

                    <View style={estiloSobre.centeredFotos}>
                        <View style={estiloSobre.sombra}>
                        <Image style={estiloSobre.imageFoto} source={require('../../../assets/fotos/primata3.png')} />
                        </View>
                        <Text style={estiloSobre.nome}>Vinicius da Silva</Text>
                    </View>
                    <View style={estiloSobre.linha} />

                    <View style={estiloSobre.centeredFotos}>
                        <View style={estiloSobre.sombra}>
                        <Image style={estiloSobre.imageFoto} source={require('../../../assets/fotos/primata1.png')} />
                        </View>
                        <Text style={estiloSobre.nome}>Lucas Rodrigo</Text>
                    </View>
                    <View style={estiloSobre.linha} />
                    
                    <View style={estiloSobre.centeredFotos}>
                        <View style={estiloSobre.sombra}>
                        <Image style={estiloSobre.imageFoto} source={require('../../../assets/fotos/primata5.png')} />
                        </View>
                        <Text style={estiloSobre.nome}>Pablo Henrique</Text>
                    </View>
                    <View style={estiloSobre.linha} />
                    
                    <View style={estiloSobre.centeredFotos}>
                        <View style={estiloSobre.sombra}>
                        <Image style={estiloSobre.imageFoto} source={require('../../../assets/fotos/primata6.png')} />
                        </View>
                        <View>
                        <Text style={estiloSobre.nome}>Micael Cassiano</Text>
                        </View>
                    </View>
                    <View style={estiloSobre.linha} />

                    <View style={estiloSobre.centeredFotos}>
                        <View style={estiloSobre.sombra}>
                        <Image style={estiloSobre.imageFoto} source={require('../../../assets/fotos/primata2.png')} />
                        </View>
                        <Text style={estiloSobre.nome}>Elbert Lucas</Text>
                    </View>
                    <View style={estiloSobre.linha} />
                </View>
            </View>
            <View style={estiloSobre.footer}>
                <View style={estiloSobre.rodape}>
                    <Text style={estiloSobre.textoFooter}>By</Text>
                    <Image style={estiloSobre.imageFooter} source={require('../../../assets/footerLogo.png')}/>
                </View>
            </View>
        </ScrollView>
    );
}