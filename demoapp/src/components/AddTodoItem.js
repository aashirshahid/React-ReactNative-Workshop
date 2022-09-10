import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
function AddTodoItem(props) {
  const {addHandler} = props;
  const [todo, setTodo] = useState('');
  /**
   * onSubmitHandler will call addHandler method with todo argument in it to add this todo task in the todo list.
   * and will set the state to empty string after the task is added to the list.
   */
  const onSubmitHandler = () => {
    addHandler(todo);
    setTodo('');
  };
  return (
    <View style={styles.todo}>
      <TextInput
        placeholder="Add your new todo item..."
        value={todo}
        style={styles.textInput}
        //onChangeText method will detect the changes in text box and will call the setTodo to set the todo task.
        onChangeText={setTodo}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onSubmitHandler}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    height: 40,
    fontSize: 16,
    borderColor: '#ccc',
  },
  button: {
    height: 40,
    width: 50,
    backgroundColor: '#721ce3',
    padding: 10,
    borderRadius: 3,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
export default AddTodoItem;
