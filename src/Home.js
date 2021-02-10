import React, { useState, useRef } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default ({ navigation}) => {
  return ( 
	<View style={{flex: 1, backgroundColor: '#DCDCDC'}}>
    <View style={{alignItems: 'center'}}>
        <Image source={require('./Imagens/logo.jpg')} style={styles.Logo}/>
        <TouchableOpacity onPress={ () => navigation.navigate('Perguntas')} style={styles.Iniciar}>
            <View style={{flex: 1}}>
				<MaterialCommunityIcons name="notebook" size={30} color="#373737" />
			</View>
			<View style={{backgroundColor: '#90EE90', flex: 6}}>
				<Text style={{fontSize: 30, fontWeight: 'bold', color: '#373737'}}> COMEÇAR </Text>
			</View>
        </TouchableOpacity>
		{/*<TouchableOpacity style={styles.Iniciar}>
            <View style={{flex: 1}}>
				<MaterialIcons name="attach-money" size={37} color="#373737" />
			</View>
			<View style={{backgroundColor: '#9ba54c', flex: 6}}>
				<Text style={{fontSize: 30, fontWeight: 'bold', color: '#373737'}}> SEM PROPA... </Text>
			</View>
        </TouchableOpacity>
        <Image source={require('./Imagens/oab-logo.jpg')} style={styles.OabLogo}/>*/}
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
		marginTop: 40,
		marginLeft: 10
   },
   Iniciar:{
       width: '70%',
       height: 45,
       borderWidth: 2.5,
       borderColor: '#373737',
       borderRadius: 6,
	   marginTop:40,
	   justifyContent: 'center',
	   alignItems: 'center',
	   	   flexDirection:'row'
   }

});
