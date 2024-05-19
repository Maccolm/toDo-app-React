import List from "./List";
import todoData from "../data/Todo";
import { useState } from "react";

const Home = () =>{
	const [todo, setTodo] = useState(todoData)

	return (
	<div>
		<List todo={todo} setTodo={setTodo}/>	
	</div>
	)
}

export default Home