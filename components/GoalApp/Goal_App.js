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

import ListItem from './ListItem';
import GoalInput from './GoalInput';

export default function Goal_App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submitHandler = (enteredGoal) => {
    enteredGoal &&
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        {
          id: Math.random().toString(),
          value: enteredGoal,
        },
      ]);

    setIsModalVisible(false);
  };

  const clearHandler = () => {
    setCourseGoals([]);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsModalVisible(true)} />
      <GoalInput
        submitHandler={submitHandler}
        clearHandler={clearHandler}
        visible={isModalVisible}
        onCancel={closeModalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <ListItem
            title={itemData.item.value}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

  goalItem: {
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
});
