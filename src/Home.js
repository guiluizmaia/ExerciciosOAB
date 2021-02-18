import React, { useState, useRef } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';
import { AdMobBanner } from 'expo-ads-admob';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const slides = [{
    key: 1,
    title: 'Intuíto do Aplicativo',
    text: 'Prátique para a sua prova da OAB, de forma simples e rápida',
    image: 'teste'
    },
    {
    key: 2,
    title: 'Ofensiva',
    text: 'Essa área é a sua ofensiva (quantidade de respostas certas em seguida)',
    image: 'teste'
    },
    {
    key: 3,
    title: 'Vamos lá',
    text: 'Agora é só estudar!!!',
    image: 'teste'
    },
]

export default ({ navigation}) => {
  return ( 
	<View style={{flex: 1, backgroundColor: '#DCDCDC'}}>
        
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./Imagens/logo.jpg')} style={styles.Logo}/>
        <Text style={{fontSize: 18, color: '#373737', textAlign: 'center', marginTop: '10%'}}> Contém questões dos anos 2019 e 2020 </Text>
		<TouchableOpacity onPress={ () => navigation.navigate('Perguntas')} style={styles.Iniciar}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#373737'}}> COMEÇAR </Text>
            <MaterialCommunityIcons name="notebook" size={28} color="#373737" />
        </TouchableOpacity>		
    </View>
    </View>
    );
}

const styles = StyleSheet.create({
   OabLogo:{
		height: 75,
		width: 150,
		resizeMode: 'stretch',
		borderRadius: 20,
        marginTop:40
   },
   Logo:{
        height: 400,
        width: 300,
        resizeMode: 'stretch',
		marginTop: '35%',
		marginLeft: 10
   },
   Iniciar:{
        borderRadius: 6,
        backgroundColor: '#90EE90',
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '16%',
   }

});
