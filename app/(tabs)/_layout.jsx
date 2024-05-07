import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';
const TabIcon = ({ icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'text-blue-500' : 'text-gray-400'} text-xs`}>
              {name}
            </Text>
        </View>
    )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen name="home" options={{ 
            title: 'Home', 
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ) 
          }}
        />
         
        <Tabs.Screen name="create" options={{ headerShown: false }} />
        <Tabs.Screen name="bookmark" options={{ headerShown: false }} />
      </Tabs>
    </>
  )
}

export default TabsLayout