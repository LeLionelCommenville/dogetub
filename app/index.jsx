import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  
  const {isLoading, isLoggdedIn} = useGlobalContext();
  
  if(!isLoading && isLoggdedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{
        height: "100%",
      }}>
        <View className="w-full flex items-center justify-center min-h-[85vh]  px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.doge}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-blue-400 text-center">
              Discover many doges much wow with DogeTube !
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyle="w-full mt-7" 
            />

          </View>          
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}