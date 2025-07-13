import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showTarget, setShowTarget] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setScore(0); // Reset score for new game
    // Delay showing the target for a random time (e.g., 1-3 seconds)
    const delay = Math.random() * 2000 + 1000;
    setTimeout(() => {
      setShowTarget(true);
      setStartTime(Date.now()); // Record the time when the target appears
    }, delay);
  };

  const handleTargetPress = () => {
    if (startTime) {
      const endTime = Date.now();
      const reactionDuration = endTime - startTime;
      setReactionTime(reactionDuration);
      setScore(score + 1); // Increment score
      setShowTarget(false);
      setStartTime(null);

      // Start a new round
      const delay = Math.random() * 2000 + 1000;
      setTimeout(() => {
        setShowTarget(true);
        setStartTime(Date.now());
      }, delay);
    }
  };

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <TouchableOpacity style={styles.startButton} onPress={startGame}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      ) : (
        <>
          {showTarget ? (
            <TouchableOpacity style={styles.target} onPress={handleTargetPress} />
          ) : (
            <Text style={styles.waitingText}>Wait for the square...</Text>
          )}

          {reactionTime !== null && (
            <Text style={styles.reactionTime}>Reaction Time: {reactionTime} ms</Text>
          )}

          <Text style={styles.scoreText}>Score: {score}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  waitingText: {
    fontSize: 24,
    marginBottom: 20,
  },
  target: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  reactionTime: {
    marginTop: 20,
    fontSize: 18,
  },
  scoreText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});