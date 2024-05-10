import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        className={`bg-blue-300 rounded-xl items-center p-3 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        onPress={handlePress}
        activeOpacity={0.7}>
        <Text className={`text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton