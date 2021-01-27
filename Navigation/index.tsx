import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MainTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors';
import ChatRoomScreen from '../screens/ChatRoom';

const Root = createStackNavigator();

const RootNavigator = () =>
    <NavigationContainer>
        <Root.Navigator>

            <Root.Screen
                name="All Chats"
                component={MyTabs}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                        elevation: 0,
                        shadowColor: null,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    },
                    title: 'WhatsApp',

                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            width: 60,
                            justifyContent: 'space-between',
                            marginRight: 10,
                        }}>
                            <Icon name='search-outline' size={22} color={'white'} />
                            <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'} />
                        </View>
                    )
                }} />
            <Root.Screen name="ChatRoom" component={ChatRoomScreen} options={{ headerShown: false }} />

        </Root.Navigator>
    </NavigationContainer>

export default RootNavigator;