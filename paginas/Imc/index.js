import React, { useState } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Imc() {

  const [altura, setAltura] = useState(' ');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [dadoimc, setDadoimc] = useState('Como será que está seu IMC?')

  function pegaAltura(valorAltura){
    setAltura(valorAltura)
  }

  function pegaPeso(valorPeso){
    setPeso(valorPeso)
  }

  function calcImc(){
    let imc = (peso/(altura^2));
    setImc(imc);
    if(imc < 16){
      let texto = 'Muito Abaixo do Peso';
      setDadoimc(texto)
    }else if(imc < 17){
      let texto = 'Moderadamente abaixo do peso';
      setDadoimc(texto)
    }else if(imc < 18.5){
      let texto = 'Abaixo do peso';
      setDadoimc(texto)
    }else if(imc < 25){
      let texto = 'Saudavel';
      setDadoimc(texto)
    }else if(imc < 30){
      let texto = 'Sobrepeso';
      setDadoimc(texto)
    }else if(imc < 35){
      let texto = 'Obesidade Grau 1°';
      setDadoimc(texto)
    }else if(imc < 40){
      let texto = 'Obesidade Grau 2°';
      setDadoimc(texto)
    }else{
      let texto = 'Obesidade Grau 3°'
      setDadoimc(texto)
    }
    
  }
  // VV LIMPANDO VV \\
  function limpar(){
    
    setImc(' ')
    setAltura(' ')
    setPeso(' ')
    setDadoimc('Como será que está seu IMC?')
    
  }

  function aoReferencia() {
    navigation.navigate('REFERENCIA')
  }

  const navigation = useNavigation();

  
  return (
    <SafeAreaView style={styles.container}>

    <TextInput style={styles.txtInput}
          
          placeholder ="Digite sua altura"
          keyboardType="numeric"
          onChangeText={ (text)=> pegaAltura(text) }
         />
        
        <TextInput style={styles.txtInput}
            
            placeholder ="Digite seu peso "
            keyboardType="numeric"
            onChangeText={ (text)=> pegaPeso(text) }
        />
          <View style={styles.textInerInput}>
            <Text> Altura: {altura} m </Text>
            <Text> Peso: {peso} kg </Text>
            <Text> IMC: {imc} </Text>
            <Text> {dadoimc} </Text>
          </View>
          
          <TouchableOpacity style={styles.botao} onPress = {calcImc}>
            <View style={styles.btnArea}>
          
              <Text style={styles.btnTexto}>
                 Calcular IMC
              </Text>
            </View>
        </TouchableOpacity>
   
        <Text> </Text>
  
        <TouchableOpacity style={styles.botao} onPress = {limpar}> 
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Limpar 
            </Text>
          </View>
  
        </TouchableOpacity>

      <Text></Text>

      <TouchableOpacity 
        style={styles.botao}  
        onPress={()=>navigation.goBack()}>
        
          <View style={styles.btnArea}>
            
            <Text style={styles.btnTexto}>
              VOLTAR
            </Text>
          </View>
  
        </TouchableOpacity>

      <Text></Text>

      <TouchableOpacity 
        style={styles.botao}  
        onPress={aoReferencia}>
        
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
            Referencia
            </Text>
          </View>
  
        </TouchableOpacity>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
//Definindo Botão\\
  botao:{
    width: 230,
    height: 50,
    borderColor:'#000000',
    borderWidth: 2,
    borderRadius: 25
  },
  //V Defindo AREA DE DENTRO do botão V\\
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  //V Definindo TEXTO DETRO do botão V\\
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000'
    
  },
  txtInput:{
    height: 45,
    width: '50%',
    borderWidth: 1,
    margin:10,
    padding:10,
    fontSize:20,
    
  },
  textInerInput:{
    marginBottom:10
  }
});