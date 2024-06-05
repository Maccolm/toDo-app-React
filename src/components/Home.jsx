import axios from 'axios';
import {v4 as uuidv4} from 'uuid'
import List from "./List";
import { useEffect, useState } from "react";
import Form from "./Form";
import ModalWindow from './ModalWindow';
import EditModal from './EditModal';
import { Button, useDisclosure } from '@nextui-org/react';
import { useTheme } from './useTheme';


const Home = () =>{
	const { darkMode } = useTheme()
	const [todo, setTodo] = useState([])

	useEffect(() =>{
		fetchTodos()
	}, [])

	const fetchTodos = async () => {
		const userId = JSON.parse(localStorage.getItem('user'))
		const response = await axios.get(`/api/todos?userId=${userId}`)
		setTodo(response.data)
	}


	const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
	const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
   
	const [deleteId, setDeleteId] = useState(null);
	const [editTodo, setEditTodo] = useState(null) 

	const addTodo = async (newTodo) => {
		const userId = JSON.parse(localStorage.getItem('user'))
		newTodo.id = uuidv4()
		newTodo.userId = userId
		setTodo([newTodo, ...todo])
		
		try {
			const response = await axios.post("/api/todos", newTodo)
			if (response.status !== 201) {
				throw new Error(" Failed to add todo")
			}
		} catch (error) {
			console.log("Error adding todo", error);
		}
	}

	const deleteTodo = (id) => {
		setDeleteId(id)
		onDeleteOpen()
	}
	
	const onDelete = async () =>{
		try {
			const response = await axios.delete(`/api/todos/${deleteId}`)
			if (response.status === 200) {
				setTodo(todo.filter((item) => item.id !== deleteId))
				setDeleteId(null)
				onDeleteClose()
			} else {
				throw new Error("Failed to delete todo")
			}
		} catch (error) {
			console.error("Error deleting todo", error);
		}
	}

	const handleEdit = (todo) => {
		setEditTodo(todo)
		onEditOpen()
	}

	const updateTodo = async (updatedTodo) => {
		setTodo(todo.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)))
		
		try {
			const response = await axios.put(`/api/todos/${updatedTodo.id}`, updatedTodo)
			if (response.status !== 200) {
				throw new Error("Failed to update todo")
			}
		} catch (error) {
			console.error("Error updating todo", error);
		}

		onEditClose()
	}	

	const logOut = () => {
		setTimeout(() =>{
			window.location.reload()
		},300)
		localStorage.removeItem('user')
	}
	return (
		<div className={`container ${darkMode ? 'dark' : ''}`}>
			<div className="absolute right-6 top-24">
				<Button variant='ghost' onClick={logOut}>Log out</Button>
			</div>
			<Form addTodo={addTodo}/>
			<List todo={todo} setTodo={setTodo} handleDelete={deleteTodo} handleEdit={handleEdit}/>
			{isDeleteOpen && (
				<ModalWindow isOpen={isDeleteOpen} onClose={onDeleteClose} onDelete={onDelete}/>
			)}
			{isEditOpen && (
				<EditModal isOpen={isEditOpen} onClose={onEditClose} todo={editTodo} updateTodo={updateTodo}/>
			)}
		</div>
	)
}

export default Home