import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Adtag 208 - Santa Maria</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 70,
    paddingTop: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,   
}

});

export default Header;