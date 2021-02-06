import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default () => {
  const [selecionado, setSelecionado] = useState("");
  const [acertou, setAcertou] = useState(2);
  const [ofensiva, setOfensiva] = useState(0);
  const [aleat, setAleat] = useState(1);

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
    <View style={{flex: 1,}}>
		
      <ScrollView>
              
        <View style={{flex:1, alignItems: 'center',}}>
        
		<View style={{ alignItems: 'center', marginTop: 50}}>
			<FontAwesome5 name="gripfire" size={35} color='#ff7f00' />
			<Text style = { styles.seq } > {ofensiva} </Text> 
		</View>
        <View style = { styles.VPergunta } >
          <Text style = { styles.ano } > {perguntas[aleat].ano} </Text> 
          <Text style = { styles.pergunta } > {perguntas[aleat].pergunta} </Text> 
        </View> 
		    <View style = {{width: '93%', height: 4, backgroundColor: '#DCDCDC',}}></View>
        <View style = { styles.VResposta } >
          
        {selecionado == "a" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "a"){
              setSelecionado("");
            }else{
              setSelecionado("a")
            }}}> 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "a" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "a"){
              setSelecionado("");
            }else{
              setSelecionado("a")
            }}}>
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "a" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          }
          {selecionado != "a" && perguntas[aleat].certo == "a" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "a" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou }> 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          }  
 
          
          {selecionado == "b" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "b"){
              setSelecionado("");
            }else{
              setSelecionado("b")
            }}}> 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "b" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "b"){
              setSelecionado("");
            }else{
              setSelecionado("b")
            }}}>
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "b" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          }
          {selecionado != "b" && perguntas[aleat].certo == "b" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele }> 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "b" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou } > 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          }  

        {selecionado == "c" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "c"){
              setSelecionado("");
            }else{
              setSelecionado("c")
            }}}> 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "c" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "c"){
              setSelecionado("");
            }else{
              setSelecionado("c")
            }}}>
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "c" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele }> 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          }
          {selecionado != "c" && perguntas[aleat].certo == "c" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "c" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou } > 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          }  


        {selecionado == "d" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "d"){
              setSelecionado("");
            }else{
              setSelecionado("d")
            }}}> 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "d" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "d"){
              setSelecionado("");
            }else{
              setSelecionado("d")
            }}}>
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "d" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele }> 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          }
          {selecionado != "d" && perguntas[aleat].certo == "d" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "d" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou }> 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          }  


          {acertou == 1 &&
            <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
			        <Text style = {{color:'#90ee90', fontSize:24}}>VOCÊ ACERTOU</Text>
			        <FontAwesome name="smile-o" size={35} color="#90ee90" />
			      </View>
		      }
          {acertou == 0 &&
			      <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <Text style = {{color:'#ff4040', fontSize:24}}>VOCÊ ERROU</Text>
			        <FontAwesome name="frown-o" size={35} color="#ff4040" />
			      </View>
		      }
		
		</View> 
    </View>                
       
    </ScrollView>
      {acertou == 2 &&
      <TouchableOpacity style = { styles.enviarSem } onPress={() =>{
          if (selecionado == perguntas[aleat].certo){
            setAcertou(1);
            setOfensiva(ofensiva + 1);
          }
          else if (selecionado != perguntas[aleat].certo){
            setAcertou(0);
            setOfensiva(0);
          }
        }}> 
        <Text> RESPONDER </Text>
        <FontAwesome name="pencil-square-o" size={24} color="black" />
      </TouchableOpacity>
      }
      {acertou != 2 &&
      <TouchableOpacity style = { styles.enviarSem }> 
        <Text> PROXIMA </Text>
        <FontAwesome name="arrow-circle-right" size={24} color="black" />
      </TouchableOpacity>
      }
       
    </View>
    );
}

const styles = StyleSheet.create({
    
    VPergunta: {
        marginTop: 10,
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
		//fontWeight: 'bold',
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
    errou:{
      borderRadius: 6,
      backgroundColor: '#ff4040',
      width: '90%',
      minHeight: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },
	txtpergunta: {
		margin: 10,
	},
	seq: {
		fontSize: 20,
	},
	enviarSem: {
      borderRadius: 6,
      backgroundColor: '#90EE90',
      width: '100%',
      height: 60,
	    justifyContent: 'center',
	    alignItems: 'center'
    }

});
