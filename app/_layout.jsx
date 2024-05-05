import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();
const BaseLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Comic-Sans-MS": require("../assets/fonts/Comic-Sans-MS.ttf"),
    "Comic-Sans-MS-Bold": require("../assets/fonts/Comic-Sans-MS-Bold.ttf"),
  })

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error)  return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default BaseLayout
