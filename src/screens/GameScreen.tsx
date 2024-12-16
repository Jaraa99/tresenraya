import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const GameScreen = ({ navigation }: { navigation: any }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = (board: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const makeAIMove = (currentBoard: (string | null)[]) => {
    const availableMoves = currentBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    if (availableMoves.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const aiMove = availableMoves[randomIndex] as number;

    const newBoard = [...currentBoard];
    newBoard[aiMove] = '🔵';
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      navigation.navigate('Result', { winner });
    } else if (!newBoard.includes(null)) {
      navigation.navigate('Result', { winner: 'Tie' });
    }

    setIsXNext(true);
  };

  const handlePress = (index: number) => {
    const newBoard = [...board];
    if (newBoard[index] || checkWinner(board)) return;

    newBoard[index] = '✖';
    setBoard(newBoard);
    setIsXNext(false);

    const winner = checkWinner(newBoard);
    if (winner) {
      navigation.navigate('Result', { winner });
    } else if (!newBoard.includes(null)) {
      navigation.navigate('Result', { winner: 'Tie' });
    }
  };

  useEffect(() => {
    if (!isXNext) {
      setTimeout(() => makeAIMove(board), 500); 
    }
  }, [isXNext]);

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.board}>
          {board.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cell}
              onPress={() => handlePress(index)}
              disabled={!isXNext || value !== null} 
            >
              <Text style={styles.cellText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  board: {
    width: 300,
    height: 300,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cell: {
    width: '33%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A75E9B',
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GameScreen;
