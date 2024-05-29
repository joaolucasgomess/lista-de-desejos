import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'

export const SingupLoginScreen = () => {
        const navigation = useNavigation()
        const {username,setUsername}=  useState("");
        const {email,setEmail}=  useState("");

        const singup = async () => {
            const result = await axios.post('https://listadesejo.azurewebsites.net/api/usuario', {
              nome: 'joaolucas',
              email: 'joaolucas@mobile2.com',
            })
            localStorage.setItem("email", result.email);
            localStorage.setItem("usuarioId", result.usuarioId);
        }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='Nome' value={username} onChangeText={setUsername} autoCorrect={false}
            autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail} autoCorrect={false}
            autoCapitalize='none'/>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={singup}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </Pressable>
            </View>
            <View>
              <Text>Já possui uma conta?</Text>
              <Pressable style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
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