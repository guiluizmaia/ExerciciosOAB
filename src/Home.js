import React, { useState, useRef } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

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
