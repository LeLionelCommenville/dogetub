import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white font-sans">
      <Text>Dogetube like youtube but much wow!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-3xl font-sans-bold">Go to Home</Link>
    </View>
  );
}