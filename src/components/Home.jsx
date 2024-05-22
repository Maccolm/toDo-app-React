import List from "./List";
import todoData from "../data/Todo";
import { useState } from "react";
import Form from "./Form";
const Home = () =>{
	const [todo, setTodo] = useState(todoData)

	return (
	<div className="container">
		<Form/>
		<List todo={todo} setTodo={setTodo}/>	
	</div>
	)
}

export default Home