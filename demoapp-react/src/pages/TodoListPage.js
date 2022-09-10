import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";

function TodoListPage() {
	const [todoList, setTodoList] = useState([]);
	//This is the history object that is maintained by react-router-dom and it will help in transition to different app pages.
	const history = useHistory();
	useEffect(() => {
		const Arr = JSON.parse(localStorage.getItem("todoList")) || [];
		setTodoList(Arr);
	}, []);
 /**
  * setLocalStorage method will save your todoList to the localStorage of your browser.
  * The reason behind using localStorage is to persist the todoList state.
  * @param {Array} value
  */
    const setLocalStorage = (value) => {
		localStorage.setItem("todoList", JSON.stringify(value));
	};
 /**
   * addHandler method will add new todo item on the todo list
   * @param {*} todo
   */
	const addHandler = (todo) => {
		setTodoList((previous) => {
			//...(Aka Spread Operator) we're using this operator to append the the new todo item in the todo list.
			setLocalStorage([...previous, todo]);
			return [...previous, todo];
		});
	};
/**
   * deleteItem method will delete the todo item from the todo list on the basis of index.
   * @param {number} index
   */
	const deleteItem = (index) => {
		const updatedTodoList = [...todoList];
		updatedTodoList.splice(index, 1);
		setLocalStorage(updatedTodoList);
		setTodoList(updatedTodoList);
	};
  /**
   * todoListHandler method will delete and navigate to the detail screen on the basis of what class we are getting in our event.
   * @param {Event} e
   */
	const todoListHandler = (e) => {
		if (e.target.classList.contains("icon")) {
			deleteItem(e.target.id);
		} else if (e.target.classList.contains("view-detail")) {
			history.push("/detail", todoList[e.target.id]);
		}
	};
  /**
   * deleteAllITem method will remove all todo items from the todo list. and also clear the localStorage.
   */
	const deleteAllITem = () => {
		setTodoList([]);
		setLocalStorage([]);
	};

	return (
		<React.Fragment>
			<header>Todo App</header>
			{/* Here we're passing a addHandler props to AddTodoItem Component which is the children component of TodoListScreen Comp. */}
			<AddTodoItem addHandler={addHandler} />
			{/* In TodoList Component we're passing todoList state and todoListHandler method and props*/}
			<TodoList todoList={todoList} todoListHandler={todoListHandler} />
			<div className="footer">
				<span>
					You have{" "}
					<span className="pendingTask">{todoList.length}</span>{" "}
					pending tasks
				</span>
				<button onClick={deleteAllITem}>Clear All</button>
			</div>
		</React.Fragment>
	);
}

export default TodoListPage;
