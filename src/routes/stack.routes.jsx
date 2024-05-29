import { SingupLoginScreen } from '../screens/SingupLoginScreen'

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
        </Stack.Navigator>
    )
}