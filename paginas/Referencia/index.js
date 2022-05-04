import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Referencia() {
  
  const navigation = useNavigation();

  function aoImc() {
    navigation.navigate('IMC');
  }

    return (
      
      <View style={styles.container}>
        <View style={styles.textRef}>
          <View >


          <Text>
          Caso o IMC fique abaixo de 16 Muito Abaixo do Peso.
          </Text>
          
          <Text>
          Caso o IMC fique abaixo de 17 Moderadamente abaixo do peso.
          </Text> 

          <Text>
            Caso o IMC fique abaixo de 18.5 Abaixo do peso.
          </Text> 

          <Text>
            Caso o IMC fique abaixo ou igual a 25 Saudavel.
          </Text>

          <Text>
          Caso o IMC fique acima de 30 Sobrepeso.
          </Text>

          <Text>
          Caso o IMC fique acima de 35 Obesidade Grau 1°.
          </Text>

          <Text>
          Caso o IMC fique acima de 40 Obesidade Grau 2°.
          </Text>

          <Text>
          Caso o IMC fique muito acima de 45 Obesidade Grau 3°.
          </Text>
        </View>

      </View>
     

        <TouchableOpacity 
        style={styles.botao}  
        onPress={()=>navigation.goBack()}>
        
          <View style={styles.btnArea}>
            
            <Text style={styles.btnTexto}>
              VOLTAR
            </Text>
          </View>
  
        </TouchableOpacity>

        <Text> </Text>

        <TouchableOpacity 
        style={styles.botao}  
        onPress={aoImc}>
        
          <View style={styles.btnArea}>
            
            <Text style={styles.btnTexto}>
              Calculadora IMC
            </Text>
          </View>
  
        </TouchableOpacity>

      </View>
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
    borderWidth: 1,
    margin:10,
    padding:10,
    fontSize:20
  }, 
  textRef:{
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000'
  }
});