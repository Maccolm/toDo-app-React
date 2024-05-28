import {v4 as uuidv4} from 'uuid'
import List from "./List";
import todoData from "../data/Todo";
import { useEffect, useState } from "react";
import Form from "./Form";
import Item from './Item';
import ModalWindow from './ModalWindow';
import EditModal from './EditModal';
import { useDisclosure } from '@nextui-org/react';


const Home = ({ darkMode }) =>{
	const [todo, setTodo] = useState([])

	useEffect(() =>{
		fetchTodos()
	}, [])

	const fetchTodos = async () =>{
		const response = await fetch("/api/todos")
		const data = await response.json()

		setTodo(data)
	}


	const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
	const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
   
	const [deleteId, setDeleteId] = useState(null);
	const [editTodo, setEditTodo] = useState(null) 

	const addTodo = (newTodo) =>{
		newTodo.id = uuidv4()
		setTodo([newTodo, ...todo])
	}
	const deleteTodo = (id) => {
		setDeleteId(id)
		onDeleteOpen()
	}
	const onDelete = () =>{
		setTodo(todo.filter((item) => item.id !== deleteId ))
		setDeleteId(null)
		onDeleteClose()
	 }

	 const handleEdit = (todo) => {
		setEditTodo(todo)
		onEditOpen()
	 }

	 const updateTodo = (updatedTodo) => {
		setTodo(todo.map((todo) => (todo.id ===updatedTodo.id ? updatedTodo : todo)))
		onEditClose()
	 }	
	return (
		<div className="container">
			<Form addTodo={addTodo}/>
			<List todo={todo} setTodo={setTodo} handleDelete={deleteTodo} handleEdit={handleEdit}/>
			{isDeleteOpen && (
				<ModalWindow darkMode={darkMode} isOpen={isDeleteOpen} onClose={onDeleteClose} onDelete={onDelete}/>
			)}
			{isEditOpen && (
				<EditModal darkMode={darkMode} isOpen={isEditOpen} onClose={onEditClose} todo={editTodo} updateTodo={updateTodo}/>
			)}
		</div>
	)
}

export default Home