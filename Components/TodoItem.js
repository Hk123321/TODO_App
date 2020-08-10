import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Button} from 'react-native';

const TodoItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => props.toggleDone()}>
      <Text
        style={props.todoItem.done ? {color: '#AAAAAA'} : {color: '#313131'}}>
        {props.todoItem.title}
      </Text>

      <Button
        title="Remove"
        color={
          props.todoItem.done ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)'
        }
        onPress={() => props.removeTodo()}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});

export default TodoItem;
