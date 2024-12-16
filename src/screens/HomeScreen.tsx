import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
   
    <ImageBackground
      source={require('../../assets/Background.png')} 
      style={styles.background} 
      resizeMode="cover" 
    >
      <View style={styles.container}>
        <Text style={styles.title}>👾Tic Tac Toe 👾</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectGame')}
        >
          <Text style={styles.buttonText}>Let's Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%', 
    width: '100%', 
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#0FFF50', 
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#E8AB2D', 
    fontSize: 16,
  },
});

export default HomeScreen;
