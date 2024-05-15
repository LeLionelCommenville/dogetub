import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormFiled from '../../components/FormFiled'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn, singIn } from '../../lib/appwrite'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmiting, setisSubmiting] = useState(false)

  const submit = async () => {
    
    if(!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
    }
    setisSubmiting(true);
    try {
      await singIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);
      Alert.alert("Success", "User singed in successfully");
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setisSubmiting(false)
    }
  }

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6 h-full">
          <Image source={images.logo} className="w-[110px] h-[35px]" resizeMode="contain" />
          <Text className="text-3xl text-blue-400 text-center mt-5">
            Log in to DogeTube
          </Text>
          <FormFiled
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormFiled
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign-in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmiting}
            
          />
          <View className="flex-row items-center justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-200">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg text-blue-400">Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn