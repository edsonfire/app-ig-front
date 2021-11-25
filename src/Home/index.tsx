import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conteúdo</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
    }
});

export default Home;