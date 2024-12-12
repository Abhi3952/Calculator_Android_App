import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import MainScreen from './Views/MainScreen';  
import IntroScreen from './Views/IntroScreen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true)
  },2000);

   

  return (
    <View style={styles.container}>
      {/* Conditional rendering: show intro screen or main screen */}
      {isLoaded ? <MainScreen /> : <IntroScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
