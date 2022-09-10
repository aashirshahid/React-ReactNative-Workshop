import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'; // Core Component's that are provided by React Native to build your app.

import AddTodoItem from '../components/AddTodoItem';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

function TodoListScreen(props) {
  const [todoList, setTodoList] = useState([]);
  const {navigation} = props;
  /**
   * addHandler method will add new todo item on the list
   * @param {*} todo
   */
  const addHandler = todo => {
    setTodoList(previous => {
      return [...previous, todo];
    });
  };
  /**
   * deleteItem method will delete the todo item from the todo list on the basis of index.
   * @param {number} index
   */
  const deleteItem = index => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };
  /**
   * todoListHandler method will delete and navigate to the detail screen on the basis of what type is passed to this method
   * @param {number} index
   * @param {string} type
   */
  const todoListHandler = (index, type) => {
    if (type === 'delete') {
      deleteItem(index);
    } else {
      navigation.navigate('Details', {title: todoList[index]});
    }
  };
  /**
   * deleteAllITem method will remove all todo items from the todo list.
   */
  const deleteAllITem = () => {
    setTodoList([]);
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Todo List" />
      {/* Here we're passing a addHandler
      props to AddTodoItem Component which is the children component of
      TodoListScreen Comp. */}
      <AddTodoItem addHandler={addHandler} />
      {/* In TodoList Component we're passing todoList state and todoListHandler method and props*/}
      {/*Imp-Note: State are private data of the component so if we want our child component to use parent state then we've passing the state as props */}
      <TodoList todoList={todoList} todoListHandler={todoListHandler} />
      <View style={styles.footer}>
        <Text style={styles.footerDes}>
          You have {todoList.length} pending tasks
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={deleteAllITem}>
          <Text style={styles.btnText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
/**
 * Styles will be add here
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerDes: {
    alignSelf: 'center',
    fontSize: 16,
  },
  button: {
    height: 40,
    backgroundColor: '#721ce3',
    padding: 10,
    borderRadius: 3,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
export default TodoListScreen;
