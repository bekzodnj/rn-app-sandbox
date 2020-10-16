import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';

const GoalInput = ({submitHandler, clearHandler, visible, onCancel}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const onChangeHandler = (newGoalText) => {
    setEnteredGoal(newGoalText);
  };

  const onAddHandler = () => {
    submitHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          placeholder="Enter you goal here..."
          style={styles.input}
          onChangeText={onChangeHandler}
        />
        <View style={{flexDirection: 'row'}}>
          <Button title="ADD" onPress={onAddHandler} />
          <Button title="Cancel" color="red" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
    width: '60%',
  },
});

export default GoalInput;
