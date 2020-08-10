import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(todoInput) => props.textChange(todoInput)}
        value={props.todoIn}
      />
      <TouchableOpacity style={styles.button} onPress={props.addToDo}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
  },
  input: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    fontSize: 18,
    height: 48,
  },
  button: {
    width: 100,
    backgroundColor: '#FFCE00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default InputBar;
