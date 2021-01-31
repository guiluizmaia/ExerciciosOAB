import React, { useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity} from "react-native";



export default () => {
  return (
    <ScrollView>
      <Text style={StyleSheet.ano}>Ano da prova</Text>
      <Text style={StyleSheet.pergunta}>Pergunta</Text>
      <TouchableOpacity style={StyleSheet.a}><Text>A - </Text></TouchableOpacity>
      <TouchableOpacity style={StyleSheet.b}><Text>B - </Text></TouchableOpacity>
      <TouchableOpacity style={StyleSheet.c}><Text>C - </Text></TouchableOpacity>
      <TouchableOpacity style={StyleSheet.d}><Text>D - </Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  ano:{
    marginTop: 35,
    position: 'absolute',
    color: '#9b111e',
  },
  pergunta:{

  },
  a:{

  },
  b:{

  },
  c:{

  },
  d:{

  },

});