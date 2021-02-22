import React, { useState, useRef,  } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, AntDesign  } from '@expo/vector-icons';
import AppIntroSlider from "react-native-app-intro-slider";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const slides = [{
    key: "1",
    title: 'Intuíto do Aplicativo',
    text: 'Prátique para a sua prova da OAB, de forma simples e rápida',
    image: require('./Imagens/assets1.png'),
    backgroundColor: '#DCDCDC'
    },
    {
    key: "2",
    title: 'Ofensiva',
    text: 'Essa área é a sua ofensiva (quantidade de respostas certas em seguida)',
    image: require('./Imagens/assets2.png'),
    backgroundColor: '#DCDCDC'
    },
    {
    key: "3",
    title: 'Vamos lá',
    text: 'Agora é só estudar!!!',
    image: require('./Imagens/assets3.png'),
    backgroundColor: '#DCDCDC'
    },
]

export default ({ navigation}) => {
    const [showHome, setShowHome] = useState(Show);
    
    const Show = async () => {   
    try {
        let ShowHome = await setShowHome(AsyncStorage.getItem("@ShowVar"))
        if(ShowHome == null){
            ShowHome = "false";
        }
        return ShowHome
    } catch (error) {
        alert(error)
    }}

    function renderNextButton (){
        return(
            <FontAwesome name="arrow-circle-right" size={40} color="black" style={{marginRight:20}}/>
        );
    }
    
    function renderDoneButton (){
        return(
            <AntDesign name="checkcircleo" size={40} color="black" style = {{marginRight: 20}} />
        );
    }

    function renderSlides ({item}){
        return(
            <View style={{flex:1, backgroundColor: '#DCDCDC'}}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'cover',
                        height: '65%',
                        width:'100%', 
                        marginTop: '15%'
                    }}
                />

                <Text style={{
                    paddingTop: 25,
                    paddingBottom: 10,
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: '#009cff',
                    alignSelf: 'center'
                }}>{item.title}</Text>

                <Text style={{
                    textAlign: 'center',
                    color: '#b5b5b5',
                    paddingHorizontal: 25,
                    fontSize: 15
                }}>{item.text}</Text>
                
            </View>
        )
    }

    if(showHome == "true"){
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
} else{
    return(
    <AppIntroSlider 
    renderItem={renderSlides}
    renderNextButton={renderNextButton}
    renderDoneButton={renderDoneButton}
    onDone={async()=>{
        setShowHome("true")
        try {
            await AsyncStorage.setItem("@ShowVar", "true");            
        } catch (error) {
            alert(error)
        }
        
    }}
    data={slides}
    activeDotStyle={{
        backgroundColor: '#009cff',
        width: 30
    }}/>
    );
}
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
