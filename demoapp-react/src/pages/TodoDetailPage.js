import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PRIORITIES } from "../constants";

function TodoDetailPage() {
	const history = useHistory();
	const { title = "", priority = "" } = history.location.state;
	return (
		<React.Fragment>
			<Link to="/">Go Back</Link>
			<header>Todo Detail</header>
			<p>Title: {title}</p>
			<p>Priority: {PRIORITIES[priority]}</p>
		</React.Fragment>
	);
}

export default TodoDetailPage;
