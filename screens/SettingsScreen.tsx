import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const SettingsScreen = (props: Props) => {
  const navigation = useNavigation();

  const handleBackBtn = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Back" onPress={handleBackBtn} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
