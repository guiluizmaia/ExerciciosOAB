import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default () => {
  const [selecionado, setSelecionado] = useState("");
  
  return ( 
      <ScrollView>
        <View style={{flex:1, height: screenHeight}}>
        <View style = { styles.VPergunta } >
          <Text style = { styles.ano } > Ano da prova </Text> 
          <Text style = { styles.pergunta } > pergunta </Text> 
        </View> 
        <View style = { styles.VResposta } >
          
          {selecionado == "a" &&
          <TouchableOpacity style = { styles.sele } onPress={() => setSelecionado("a")}> 
            <Text> A - </Text>
          </TouchableOpacity>
          } 
          {selecionado != "a" &&
          <TouchableOpacity style = { styles.sem } onPress={() => setSelecionado("a")}> 
            <Text> A - </Text>
          </TouchableOpacity>
          } 
          
          {selecionado == "b" &&
          <TouchableOpacity style = { styles.sele } onPress={() => setSelecionado("b")}> 
            <Text> B - </Text>
          </TouchableOpacity>
          } 
          {selecionado != "b" &&
          <TouchableOpacity style = { styles.sem } onPress={() => setSelecionado("b")}> 
            <Text> B - </Text>
          </TouchableOpacity>
          } 

          {selecionado == "c" &&
          <TouchableOpacity style = { styles.sele } onPress={() => setSelecionado("c")}> 
            <Text> C - </Text>
          </TouchableOpacity>
          } 
          {selecionado != "c" &&
          <TouchableOpacity style = { styles.sem } onPress={() => setSelecionado("c")}> 
            <Text> C - </Text>
          </TouchableOpacity>
          } 

          {selecionado == "d" &&
          <TouchableOpacity style = { styles.sele } onPress={() => setSelecionado("d")}> 
            <Text> D - </Text>
          </TouchableOpacity>
          } 
          {selecionado != "d" &&
          <TouchableOpacity style = { styles.sem } onPress={() => setSelecionado("d")}> 
            <Text> D - </Text>
          </TouchableOpacity>
          } 


          <TouchableOpacity style = { styles.enviar }> 
            <Text> ENVIAR </Text>
          </TouchableOpacity>
          
        </View> 
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    VPergunta: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    VResposta: {
		marginTop: 30,
		justifyContent: 'center',
        alignItems: 'center' 
    },
    ano: {        
        color: '#9b111e',
    },
    pergunta: {

    },
    sem: {
      borderRadius: 6,
      backgroundColor: '#d3d3d3',
      width: '90%',
      height: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },   
    sele: {
	  	borderRadius: 6,
      backgroundColor: '#90ee90',
      width: '90%',
      height: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },
    enviar: {
      borderRadius: 6,
      backgroundColor: '#90ee90',
      width: '40%',
      height: 60,
      marginTop: 20,
	    justifyContent: 'center',
	    alignItems: 'center'
    }

});
