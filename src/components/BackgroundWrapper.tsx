import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <ImageBackground 
      source={require('../../assets/tictac.jpg')} 
      style={styles.background} 
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default BackgroundWrapper;
