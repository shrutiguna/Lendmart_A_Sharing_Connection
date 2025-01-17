import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

export default function ItemDisplayFormat({item}) {
  const navigation = useNavigation();
  return (    
    <TouchableOpacity className ="flex-1 m-2 p-2 rounded-lg border-[1px] border-slate-200"
      onPress={()=> navigation.push('productdetailStackNavigation',{product: item})}
    >
      <Image source ={{uri:item.image}}
      className ="w-full h-[170px] rounded-lg" />
      <View>
          <Text className ="text-[15px] font-bold mt-2"> {item.productname} </Text>
          <Text className ="text-[20px] font-bold" style={{color:COLORS.secondary}}> $ {item.price} </Text>
          <Text className ="text-blue-500 bg-blue-200 mt-1 p-[2px] text-center rounded-full px-1 text-[10px] w-[70px]"> {item.category} </Text>
      </View>
    </TouchableOpacity>
  )
}