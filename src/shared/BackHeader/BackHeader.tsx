import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BackIcon from '../../../assets/icons/BackIcon';
import { useNavigation } from '@react-navigation/native';

const BackHeader = () => {
  const navigation = useNavigation();
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <BackIcon onPress={onBackPress} />
      </View>
    </SafeAreaView>
  );
};
export default BackHeader;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
