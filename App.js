import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Platform,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import Header from './Components/Header';
import InputBar from './Components/InputBar';
import TodoItem from './Components/TodoItem';

const App: () => React$Node = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Hello',
      done: false,
    },
    {
      id: 2,
      title: 'Hiii',
      done: false,
    },
  ]);

  const [todoIn, setTodoIn] = useState('');
  const [state, setState] = useState(todos);

  const addNewTodo = () => {
    let newTodos = [
      {id: todos.length + 1, title: todoIn, done: false},
      ...todos,
    ];

    console.log(newTodos);
    setState(newTodos);
    setTodos(newTodos);
    setTodoIn('');
  };

  const toggleDone = (item) => {
    let todoss = todos;

    todoss = todoss.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    setTodos(todoss);
  };

  const removeTodo = (item) => {
    let todoss = todos;

    todoss = todoss.filter((todo) => todo.id !== item.id);

    setTodos(todoss);
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <InputBar
          textChange={(todoIn) => setTodoIn(todoIn)}
          addToDo={() => addNewTodo()}
          todoIn={todoIn}
        />
        <FlatList
          data={todos}
          extraData={state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => toggleDone(item)}
                removeTodo={() => removeTodo(item)}
              />
            );
            //
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
