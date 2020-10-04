import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const onChangeHandler = (newGoalText) => {
    setEnteredGoal(newGoalText);
  };

  const submitHandler = () => {
    enteredGoal &&
      setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);

    console.log(courseGoals);
  };

  const clearHandler = () => {
    setCourseGoals([]);

    console.log(courseGoals);
  };

  return (
    <ScrollView>
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

        <ScrollView>
          {courseGoals.map((goal, idx) => (
            <View key={idx} style={styles.goalItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
