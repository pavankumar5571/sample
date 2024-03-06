import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Head from "expo-router/head";
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function TabOneScreen() {
  const [title, setTitle] = useState("Home")


  useEffect(() => {
    setTimeout(() => {
      setTitle("Pavan Title")
    }, 1000)
  }, [])



  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pet's Delight"></meta>
        <meta name="keywords" content="Home"></meta>

      </Head>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
