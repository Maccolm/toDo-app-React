import {v4 as uuidv4} from 'uuid'
import List from "./List";
import todoData from "../data/Todo";
import { useState } from "react";
import Form from "./Form";
import Item from './Item';
import ModalWindow from './ModalWindow';
import { useDisclosure } from '@nextui-org/react';


const Home = ({ darkMode }) =>{
	const [todo, setTodo] = useState(todoData)
	const { isOpen, onOpen, onClose } = useDisclosure();
    const [deleteId, setDeleteId] = useState(null);

	const addTodo = (newTodo) =>{
		newTodo.id = uuidv4()
		setTodo([newTodo, ...todo])
	}
	const deleteTodo = (id) => {
		setDeleteId(id)
		onOpen()
	}
	 const onDelete = () =>{
			 setTodo(todo.filter((item) => item.id !== deleteId ))
			 setDeleteId(null)
			 onClose()
	 }
	
	return (
		<div className="container">
			<Form addTodo={addTodo}/>
			<List todo={todo} setTodo={setTodo} handleDelete={deleteTodo}/>
			{isOpen && (
				<ModalWindow darkMode={darkMode} isOpen={isOpen} onClose={onClose} onDelete={onDelete}/>
			)}
		</div>
	)
}

export default Home