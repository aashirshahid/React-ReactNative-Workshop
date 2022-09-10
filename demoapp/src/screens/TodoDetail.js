import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';

function TodoDetailScreen(props) {
  //Our App Navigation contains navigation object that have method to do navigation in react-native app
  const {navigation} = props;
  const {title = ''} = props?.route?.params;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <Header title="Todo Details" />
      <Text style={styles.title}>Title: {title}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={goBack}>
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
/**
 * Styles will be add here
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  button: {
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#721ce3',
    padding: 10,
    borderRadius: 3,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
export default TodoDetailScreen;
