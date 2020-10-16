import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default ListItem;
