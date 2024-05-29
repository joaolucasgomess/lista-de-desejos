import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const CardCategory = ({ infoCategory }) => {
    const navigation = useNavigation()

    return (
        <View style={{ width: 350 }}>
            <Pressable 
                style={styles.mainContainer}
                android_ripple={{ color: '#00000088' }}
                onPress={() => navigation.navigate('ProductsScreen',{
                    infoCategory: infoCategory
                })}
                >
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>{infoCategory.nome}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        margin: 14,
        padding: 16,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4E4E4E',
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center'
    }
})