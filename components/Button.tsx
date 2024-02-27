import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const Button: React.FC<ButtonProps> = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
