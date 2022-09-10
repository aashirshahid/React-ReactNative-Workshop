import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodoListPage from "./pages/TodoListPage";
/**
 * To use routing in react app we will need to wrap our all routes in BrowserRouter tag
 * @returns Component
 */
function App() {
	return (
		<div className="wrapper">
			<BrowserRouter basename="/">
				<Switch>
					<Route path="/" component={TodoListPage} exact />
					<Route path="/detail" component={TodoDetailPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
