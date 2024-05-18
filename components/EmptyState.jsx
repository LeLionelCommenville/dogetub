import { View, Text, Image } from 'react-native'
import { router } from 'expo-router';
import React from 'react'

import { images } from '../constants';

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px]" resizeMode='contain' />
      <Text className="text-xl text-white text-center mt-2">
        {title}
      </Text>
      <Text className="text-sm text-gray-100">
        {subtitle}
      </Text>
      <CustomButton 
        title="Create your first doge"
        handlePress={() => router.push('/create')}
        containerStyles="w-full mt-5"
      />
    </View>
  )
}

export default EmptyState