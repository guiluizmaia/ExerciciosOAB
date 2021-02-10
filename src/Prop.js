import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default ({route , navigation}) => {
  const {ofens} = route.params;
  const [ofensiva, setOfensiva] = useState(ofens);
   
  return ( 
    <View style={{flex: 1,}}>
        <View>

        </View>

        <TouchableOpacity style = { styles.enviarSem } onPress={() => navigation.reset({
            index: 1,
            routes: [{ name: 'Home'}, 
                    { name: 'Perguntas', params: { ofens: ofensiva }}]
		
                })}> 
            <Text> PROXIMA </Text>
            <FontAwesome name="arrow-circle-right" size={24} color="black" />
        </TouchableOpacity>
    
       
    </View>
    );
}

const styles = StyleSheet.create({
    
	enviarSem: {
      borderRadius: 6,
      backgroundColor: '#90EE90',
      width: '100%',
      height: 60,
	    justifyContent: 'center',
	    alignItems: 'center'
    }

});
