import React from "react";
import { PRIORITIES } from "../constants";
// import { useHistory } from "react-router-dom";
function TodoList(props) {
	// const history = useHistory();
	const { todoList, todoListHandler } = props;
	// const navigate = (todo) => {
	// 	history.push("/todos", todo);
	// };
	return (
		<div className="todoList" onClick={todoListHandler}>
			{todoList.map((todo, index) => {
				const { title, priority } = todo;
				return (
					<div className="todo-item bordered" key={index}>
						<span>
							<p>Title: {title}</p>
							<p>Priority: {PRIORITIES[priority]}</p>
						</span>
						<div style={{ float: "right" }}>
							<span className="view-detail" id={index}>
								View Detail
							</span>
							<span className="icon" id={index}>
								Delete
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default TodoList;
