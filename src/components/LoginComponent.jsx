import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginComponent = () => {
    const navigation = useNavigation()
    const [email, setEmail] =  useState("");
    const [nome, setNome] =  useState("");

    const singup = async () => {
      try{  
        const result = await axios.get(`https://listadesejo.azurewebsites.net/api/usuario/${email}`)
        if(!result){
          throw new Error('Não foi possivel logar')
        }
        console.log(email)
        setNome(result.data.nome)
        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('nome', nome)
        navigation.navigate('TabRoutes')
      }catch(err){
        console.error(err.message)
      }
    }

return(
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail} autoCorrect={false}
        autoCapitalize='none'/>
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={singup}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
</View>
)
}

    const styles = StyleSheet.create({
    container : {
    flex: 1,  
    justifyContent : 'center',
    alignItems : "center",
    },
    title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "#201e80"
    },
    inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
    },
    input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "#201e80",
    borderWidth : 1,
    borderRadius: 7
    },
    button : {
    backgroundColor : "#201e80",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
    },
    buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
    }, 
    buttonView :{
    width :"100%",
    paddingHorizontal : 40
    },
})