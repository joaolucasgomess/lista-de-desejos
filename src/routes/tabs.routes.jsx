import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListCategoryScreen } from "../screens/ListCategorysScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { WishlistScreen } from "../screens/WishlistScreen";

const Tabs = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="ListCategoryScreen"
                component={ListCategoryScreen}
                options={{
                    tabBarLabel: "Categorias",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="WishlistScreen"
                component={WishlistScreen}
                options={{
                    tabBarLabel: "Lista de Desejos",
                    headerShown: false
                }}
    
            />                
            <Tabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Perfil",
                    headerShown: false
                }}
            />        
        </Tabs.Navigator>
    )
}