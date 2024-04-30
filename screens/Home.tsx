import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StandardHeader from '../components/StandardHeader'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Home = (props: Props) => {
    const navigation = useNavigation();

    const handleBtn = () => {
        navigation.navigate("Settings")
    }
  return (
    <View>
      <StandardHeader />
      <View>
        <Button title='settings screen' onPress={handleBtn}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})