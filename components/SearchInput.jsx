import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-gray-200 rounded-3xl focus:border-blue-400 flex-row items-center space-x-4">
        <TextInput
        className="flex-1 text-white font-sans-bold text-base text-white"
        value={value}
        placeholder=" Search for doges"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        /> 
        <TouchableOpacity>
            <Image 
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
            />            
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput