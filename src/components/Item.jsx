import { useState } from 'react';
import { MdDeleteForever, MdEdit, MdOutlineCalendarToday } from 'react-icons/md'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import CardItem from "./Card";
import Checkbox from './Checkbox';

const Item = ({ todo }) =>{

	const [done, setDone] = useState(todo.done)

	const handleChange = (e) =>{
		setDone(e.target.checked)
	}

	return (
		<CardItem>
			<Card className="max-w-[400px] todo-card__container">
				<CardHeader className='flex space-x-1'>
					<div className="todo-card__title grow text-left">
						<p className="font-bold ">{todo.title}</p>
					</div>
					<div className="btns flex">
						<MdEdit style={{color: '#f7cd62', marginRight: '0.5rem'}}/>
						<MdDeleteForever style = {{color: "#ff5c45"}}/>
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
					<Checkbox label={done === true ? "Done" : "Doing"} value={done} onChange={handleChange}/>
				</CardFooter>
			</Card>
		</CardItem>
	)
}

export default Item