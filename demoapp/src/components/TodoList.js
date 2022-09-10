import React from 'react';
import {PRIORITIES} from '../constants';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
function TodoList(props) {
  // const history = useHistory();
  const {todoList, todoListHandler} = props;

  return (
    <View style={styles.todoList}>
      {todoList.map((todo, index) => {
        return (
          <View style={styles.todoItem} key={index}>
            <View>
              <Text>Title: {todo}</Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => todoListHandler(index, 'view')}>
                <Text style={styles.btnText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => todoListHandler(index, 'delete')}>
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderLeftColor: '#8E49E8',
    borderLeftWidth: 2,
    height: 60,
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: '#f2f2f2',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#e74c3c',
    width: 50,
    height: 30,
    marginEnd: 5,
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
export default TodoList;
