import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SelectGameScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground
      source={require('../../assets/Background.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Game</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => navigation.navigate('Game', { mode: 'single' })}
        >
          <Text style={styles.buttonText}>Single Player</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'purple' }]}
          onPress={() => navigation.navigate('Game', { mode: 'multi' })}
        >
          <Text style={styles.buttonText}>Two Players</Text>
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
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SelectGameScreen;
