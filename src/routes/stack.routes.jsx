import { SingupLoginScreen } from '../screens/SingupLoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginComponent } from '../components/LoginComponent'
import TabRoutes from './tabs.routes'
import { ProductsScreen } from '../screens/ProductsScreen'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return(        
        <Stack.Navigator>
            <Stack.Screen
                name="SingupLoginScreen"
                component={SingupLoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="LoginComponent"
                component={LoginComponent}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="TabRoutes"
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductsScreen"
                component={ProductsScreen}
                options={{
                    title: 'Produtos'
                }}
            />            
        </Stack.Navigator>
    )
}