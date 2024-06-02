import axios from 'axios';
import { useState } from 'react';
import { MdDeleteForever, MdEdit, MdOutlineCalendarToday } from 'react-icons/md'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import CardItem from "./Card";
import Checkbox from './Checkbox';

const Item = ({ todo, handleEdit, handleDelete }) =>{
	const [done, setDone] = useState(todo.done)
	const [loading, setLoading] = useState(false)

	const handleChange = async (e) =>{
		const newDone = e.target.checked
		setDone(newDone)
		setLoading(true)

		try {
			const response = await axios.put(`/api/todos/${todo.id}`, {
				...todo,
				done: newDone
			})
			if (response.status !== 200) {
				throw new Error("Failed to update todo")
			}
		} catch (error) {
			console.error("Error to update \'done\' ", error);
			setDone(todo.done)
		} finally {
			setTimeout(() => {
				setLoading(false)
			},1300)
		}
	}

	return (
		<CardItem >
			<Card  className="max-w-[400px] todo-card__container">
				<CardHeader className='flex space-x-1'>
					<div className="todo-card__title grow text-left">
						<p className="font-bold ">{todo.title}</p>
					</div>
					<div className="btns flex">
						<MdEdit className='edit-btn' style={{color: '#f7cd62', marginRight: '0.5rem'}} onClick={() => handleEdit(todo)}/>
						<MdDeleteForever style = {{color: "#ff5c45"}} onClick={() => handleDelete(todo.id)}/>
					</div>
				</CardHeader>
				<Divider />
				<CardBody>
					<p className="text-small todo-card__task">{todo.task}</p>
				</CardBody>
				<CardFooter className='flex items-center mb-5'>
					<div className="flex grow calender">
						<MdOutlineCalendarToday className='calender__icon'/>
						<p>{todo.day}</p>
					</div>
					<Checkbox label={done === true ? "Done" : "Doing"} value={done} onChange={handleChange} disabled={loading}/>
				</CardFooter>
			</Card>
		</CardItem>
	)
}

export default Item