import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default () => {
  const [selecionado, setSelecionado] = useState("");
  
  const [perguntas, setPerguntas] = useState([
    {
      pergunta: "Havendo indícios de que Sara obteve inscrição na Ordem dos Advogados do Brasil mediante prova falsa, foi instaurado contra ela processo disciplinar. Sobre o tema, assinale a afirmativa correta.",
      a: "O processo disciplinar contra Sara pode ser instaurado de ofício ou mediante representação, que pode ser anônima.",
      b: "Em caso de revelia de Sara, o processo disciplinar seguirá, independentemente de designação de defensor dativo.",
      c: "O processo disciplinar instaurado contra Sara será, em regra, público.",
      d: "O recurso contra eventual decisão que determine o cancelamento da inscrição de Sara não terá efeito suspensivo.",
      certo: "d",
      ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
      questao: "1"
  }, {
      pergunta: "Em certo município, os advogados André e Helena são os únicos especialistas em determinado assunto jurídico. Por isso, André foi convidado a participar de entrevista na imprensa escrita sobre as repercussões de medidas tomadas pelo Poder Executivo local, relacionadas à sua área de especialidade. Durante a entrevista, André convidou os leitores a litigarem em face da Administração Pública, conclamando - os a procurarem advogados especializados para ajuizarem, desde logo, as demandas que considerava tecnicamente cabíveis. Porém, quando indagado sobre os meios de contato de seu escritório, para os leitores interessados, André disse que, por obrigação ética, não poderia divulgá - los por meio daquele veículo. Por sua vez, a advogada Helena, irresignada com as mesmas medidas tomadas pelo Executivo, procurou um programa de rádio, oferecendo - se para uma reportagem sobre o assunto. No programa, Helena manifestou - se de forma técnica, educativa e geral, evitando sensacionalismo. Considerando as situações acima narradas e o disposto no Código de Ética e Disciplina da OAB, assinale a afirmativa correta.",
      a: "André e Helena agiram de forma ética, observando as normas previstas no Código de Ética e Disciplina da OAB.",
      b: "Nenhum dos dois advogados agiu de forma ética, tendo ambos inobservado as normas previstas no Código de Ética e Disciplina da OAB.",
      c: "Apenas André agiu de forma ética, observando as normas previstas no Código de Ética e Disciplina da OAB.",
      d: "Apenas Helena agiu de forma ética, observando as normas previstas no Código de Ética e Disciplina da OAB.",
      certo: "b",
      ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
      questao: "2"
  },
  ])

  return ( 
    <View style={{backgroundColor: '#111', flex: 1,}}>
      <ScrollView style={{height: '90%'}}>
        <View style={{flex:1, alignItems: 'center',}}>
        <View style = { styles.VPergunta } >
          <Text style = { styles.ano } > {perguntas[1].ano} </Text> 
          <Text style = { styles.pergunta } > {perguntas[1].pergunta} </Text> 
        </View> 
        <View style = { styles.VResposta } >
          
          {selecionado == "a" &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "a"){
              setSelecionado("");
            }else{
              setSelecionado("a")
            }
            }}> 
            <Text style = {styles.txtpergunta}> A - {perguntas[1].a} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "a" &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "a"){
              setSelecionado("");
            }else{
              setSelecionado("a")
            }}}> 
            <Text style = {styles.txtpergunta}> A - {perguntas[1].a} </Text>
          </TouchableOpacity>
          } 
          
          {selecionado == "b" &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "b"){
              setSelecionado("");
            }else{
              setSelecionado("b")
            }}}> 
            <Text style = {styles.txtpergunta}> B - {perguntas[1].b} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "b" &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "b"){
              setSelecionado("");
            }else{
              setSelecionado("b")
            }}}>
            <Text style = {styles.txtpergunta}> B - {perguntas[1].b} </Text>
          </TouchableOpacity>
          } 

          {selecionado == "c" &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "c"){
              setSelecionado("");
            }else{
              setSelecionado("c")
            }}}>
            <Text style = {styles.txtpergunta}> C - {perguntas[1].c} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "c" &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "c"){
              setSelecionado("");
            }else{
              setSelecionado("c")
            }}}>
            <Text style = {styles.txtpergunta}> C - {perguntas[1].c} </Text>
          </TouchableOpacity>
          } 

          {selecionado == "d" &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "d"){
              setSelecionado("");
            }else{
              setSelecionado("d")
            }}}>
            <Text style = {styles.txtpergunta}> D - {perguntas[1].d} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "d" &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "d"){
              setSelecionado("");
            }else{
              setSelecionado("d")
            }}}>
            <Text style = {styles.txtpergunta}> D - {perguntas[1].d} </Text>
          </TouchableOpacity>
          } 
		</View> 
    </View>                
       
    </ScrollView>

    <TouchableOpacity style = { styles.enviar }> 
        <Text> RESPONDER </Text>
    </TouchableOpacity> 
    </View>
    );
}

const styles = StyleSheet.create({
    
    VPergunta: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center', 
		    width: '92%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderTopLeftRadius: 0,        
        padding: 15
    },
    VResposta: {
		marginTop: 20,
		justifyContent: 'center',
        alignItems: 'center' 
    },
    ano: {        
        color: '#9b111e',
    },
    pergunta: {
		fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
    },
    sem: {
      borderRadius: 6,
      backgroundColor: '#d3d3d3',
      width: '90%',
      minHeight: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },   
    sele: {
	  	borderRadius: 6,
      backgroundColor: '#90ee90',
      width: '90%',
      minHeight: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },
	txtpergunta: {
		margin: 10,
	},
    enviar: {
      borderRadius: 6,
      backgroundColor: '#90ee90',
      width: '100%',
      height: 60,
	    justifyContent: 'center',
	    alignItems: 'center'
    }

});
