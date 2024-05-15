import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormFiled from '../../components/FormFiled'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmiting, setisSubmiting] = useState(false)

  const submit = async () => {
    
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
    }
    setisSubmiting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);
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
            Sign up to DogeTube
          </Text>
          <FormFiled
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
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
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmiting}
            
          />
          <View className="flex-row items-center justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-200">Already have an account ?</Text>
            <Link href="/sign-in" className="text-lg text-blue-400">Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp