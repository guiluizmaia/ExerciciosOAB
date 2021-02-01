import React, { useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

export default () => {
    return ( 
      <ScrollView>
        <View style = { StyleSheet.VPergunta } >
          <Text style = { StyleSheet.ano } > Ano da prova </Text> 
          <Text style = { StyleSheet.pergunta } > Pergunta </Text> 
        </View> 
        <View style = { StyleSheet.VResposta } >
          <TouchableOpacity style = { StyleSheet.a } > < Text > A - </Text></TouchableOpacity >
          <TouchableOpacity style = { StyleSheet.b } > < Text > B - </Text></TouchableOpacity >
          <TouchableOpacity style = { StyleSheet.c } > < Text > C - </Text></TouchableOpacity >
          <TouchableOpacity style = { StyleSheet.d } > < Text > D - </Text></TouchableOpacity>
        </View> 
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    VPergunta: {
        marginTop: 35,
    },
    VResposta: {

    },
    ano: {
        position: 'absolute',
        color: '#9b111e',
    },
    pergunta: {

    },
    a: {

    },
    b: {

    },
    c: {

    },
    d: {

    },

});
