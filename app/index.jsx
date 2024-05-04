import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Dogetube like youtube but much wow!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-3xl">Go to Profile</Link>
    </View>
  );
}