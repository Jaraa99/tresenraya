import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

interface BoardProps {
  board: string[];
  onPress: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onPress }) => {
  return (
    <View style={styles.board}>
      {board.map((value, index) => (
        <Square key={index} value={value} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    backgroundColor: '#203A56',
  },
});

export default Board;
