import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import HomeClient from '../../../components/Home.client'; // Assurez-vous que le chemin est correct
import { useAuth } from '../../context/AuthContext'; // Importez useAuth pour gérer la déconnexion

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const { onLogout } = useAuth();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true, 
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 70,
                },
            }}
        >
            <Tab.Screen
                name="Accueil"
                component={HomeClient}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={focused ? COLORS.bgBlue : COLORS.gray2}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Quitter"
                component={HomeClient} // Vous pouvez mettre n'importe quel composant ici, car il ne sera pas utilisé
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="log-out"
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            onPress={onLogout} // Déclenche la déconnexion directement
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Ionicons
                                name="log-out"
                                size={24}
                                color={COLORS.gray2}
                            />
                            <Text style={{ fontSize: 12, color: COLORS.gray2 }}>Quitter</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;