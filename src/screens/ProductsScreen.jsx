import { View, Text, StyleSheet, Pressable, Image, ScrollView } from "react-native"; 
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const ProductsScreen = ({ route }) => {
    const [email, setEmail] = useState('')
    const [products, setProducts] = useState([])
    const infoCategory = route.params.infoCategory

    useEffect(() => {
        getEmail()
    }, [])

    useEffect(() => {
        getProduct()
    }, [email])

    const getEmail = async () => {
        try {
            const value = await AsyncStorage.getItem('email')
            setEmail(value)
        } catch(error){
          console.error(error)  
        }
    }

    const getProduct = async () => {  
        try {
            const result = await axios.get(`https://listadesejo.azurewebsites.net/api/produtos/${infoCategory.categoriaId}/${email}`)
            if(!result){
                throw new Error('Nenhum produto encontrado')
            }
            setProducts(result.data)
        }catch(error){  
            console.error(error.message)
        }
    }

    const postWishlist = async (productId) => {
        try {
            await axios.post(`https://listadesejo.azurewebsites.net/api/listadesejo/${productId}/${email}`)
        }catch(error){  
            console.error(error.message)
        }
    }

    return(
        <ScrollView>
            {products.map((product) => (
                <View style={styles.mainContainer}>
                    <View>
                        <Image
                            source={{
                                uri: product.urlImagem
                            }}
                            style={{ height: 400 }}
                        />
                        <Text style={{ fontWeight: '600', fontSize: 25, color: '#4E4E4E' }}>{product.nome}</Text>
                        <View>
                            <Text style={{  color: '#4E4E4E', fontWeight: '600', fontSize: 20, marginVertical: 10 }}>Preço: {product.preco}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.button} onPress={() => (postWishlist(product.produtoId))}>
                        <Text style={{  color : "white" }}>Adicionar a lista de desejos</Text>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        margin: 14,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    button: {
        marginTop: 10, 
        backgroundColor: '#201e80', 
        width: 200, 
        height: 30, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    }
})