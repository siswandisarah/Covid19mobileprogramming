import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Greeting from './component/Greeting';
import Header from './component/Header';
import TextSubBody from './component/TextSubBody';
import Global from './component/Global';
import CovidIndo from './component/CovidIndo';
import TextBody from './component/TextBody';
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxSub}>
            <Greeting/>
            <Global/>
        </View>
        <View style={styles.boxSubBody}>
          <TextBody/>  
        </View>
        <View style={styles.boxBody}>
          <TextSubBody/>
          <CovidIndo/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 2,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSub: {
      flex: 4,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSubBody: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
},
  boxBody: {
      flex: 10
  }
})

export default App;