import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, ImageBackground } from 'react-native';

const ResultScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const { winner } = route.params;
  const fadeIn = new Animated.Value(0); 

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleRestart = () => {
    navigation.navigate('Game'); 
  };

  return (
    <ImageBackground
      source={require('../../assets/Background.png')} 
      style={styles.background}
      resizeMode="cover" 
    >
      <View style={styles.container}>
        <Text style={styles.title}>Game Over </Text>
        <Animated.View style={{ opacity: fadeIn }}>
          {winner === 'Tie' ? (
            <Text style={styles.resultText}>¡El juego ha terminado en empate!😤</Text>
          ) : (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>¡El ganador es 😊{winner}!</Text>
              <Image
                source={require('../../assets/trophy.png')} 
                style={styles.trophyImage}
              />
            </View>
          )}
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Reiniciar juego 😜</Text>
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
    color: '#fff', 
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
  },
  trophyImage: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ResultScreen;
