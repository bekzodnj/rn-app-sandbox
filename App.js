import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import ListItem from './components/ListItem';
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const onChangeHandler = (newGoalText) => {
    setEnteredGoal(newGoalText);
  };

  const submitHandler = () => {
    enteredGoal &&
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        {
          key: Math.random().toString(),
          value: enteredGoal,
        },
      ]);
  };

  const clearHandler = () => {
    setCourseGoals([]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter you goal here..."
          style={styles.input}
          onChangeText={onChangeHandler}
        />
        <Button title="ADD" onPress={submitHandler} />
        <Button title="Clear" onPress={clearHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <ListItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
    width: '60%',
  },
  goalItem: {
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
});
