import React, { useState } from "react";
import { DEFAULT_TODO_STATE } from "../constants";
function AddTodoItem(props) {
	const { addHandler } = props;
	const [todo, setTodo] = useState(DEFAULT_TODO_STATE);
	const onChange = (e) => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		addHandler(todo);
		setTodo(DEFAULT_TODO_STATE);
	};
	const { title, priority } = todo;
	return (
		<form className="todo" onSubmit={onSubmitHandler}>
			<input
				type="text"
				name="title"
				placeholder="Add your new todo item..."
				value={title}
				onChange={onChange}
			/>
			<select name="priority" value={priority} onChange={onChange}>
				<option value={1}>High (1)</option>
				<option value={2}>Mid (2)</option>
				<option value={3}>Low (3)</option>
			</select>
			<button>Add</button>
		</form>
	);
}

export default AddTodoItem;
