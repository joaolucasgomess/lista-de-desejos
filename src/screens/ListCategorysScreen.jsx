import { View, Text, Pressable, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import axios from "axios"
import React, { useState, useEffect } from 'react'
import { CardCategory } from "../components/CardCategory"

export const ListCategoryScreen = () => {
    const [categories, setCategories] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        getCategorys()
    }, [])

    const getCategorys = async () => {  
        try {
            const result = await axios.get('https://listadesejo.azurewebsites.net/api/categorias')
            if(!result){
                throw new Error('Nenhum categoria encontrada')
            }
            setCategories(result.data)
        }catch(error){  
            console.error(error.message)
        }
    }

    const printCategories = categories.map((category) => (
        <CardCategory
            infoCategory={category}
            key={category.categoriaId}
        />
    ))

    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {printCategories}
        </View>
    )
}