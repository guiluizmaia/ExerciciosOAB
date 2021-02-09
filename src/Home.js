import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default ({ navigation}) => {
  return ( 
    <View style={{flex: 1,}}>
      
        <Text> HOME </Text>
        <TouchableOpacity onPress={ () => navigation.navigate('Perguntas')}>
            <Text> INICIAR </Text>
        </TouchableOpacity>
        
    </View>
    );
}

const styles = StyleSheet.create({
   

});
