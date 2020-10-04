import React, {useState} from 'react';

import {StyleSheet, View, Text} from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.title}</Text>
    </View>
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
