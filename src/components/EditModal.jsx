import { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody, Input } from '@nextui-org/react';
import { useTheme } from './ThemeContext';
import PropTypes from 'prop-types'

const EditModal = ({ isOpen, onClose, todo, updateTodo }) => {
	const [theme, setTheme] = useState('')
	
	const [title, setTitle] = useState(todo?.title || '')
	const [task, setTask] = useState(todo?.task || '')
	const [day, setDay] = useState(todo?.day || '')

useEffect(() => {
	if(todo) {
		setTitle(todo.title)
		setTask(todo.task)
		setDay(todo.day)
	}
}, [todo])

const handleSubmit = () => {
	updateTodo({
		...todo,
		title,
		task,
		day,
	})
}

const { darkMode } = useTheme()
useEffect(()=>{
	setTheme(darkMode ? 'dark text-foreground' : '');
	}, [darkMode])

return (
	<Modal className={theme} isOpen={isOpen} onClose={onClose}>
		<ModalContent>
			<ModalHeader>Edit ToDo</ModalHeader>
			<ModalBody>
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					label='Title'
					fullWidth
				/>
				<Input
					value={task}
					onChange={(e) =>setTask(e.target.value)}
					label="Task"
					fullWidth
				/>
				<div className="option-container mb-3">
					<select value={day} className="w-[100%] p-1 pl-4" onChange={(e) => setDay(e.target.value)}>
						<option value="" disabled={true}>Select day</option>
						<option value="Monday">Monday</option>
						<option value="Tuesday">Tuesday</option>
						<option value="Wednesday">Wednesday</option>
						<option value="Thursday">Thursday</option>
						<option value="Friday">Friday</option>
						<option value="Saturday">Saturday</option>
						<option value="Sunday">Sunday</option>
					</select>
				</div>
			</ModalBody>
			<ModalFooter>
				<Button color='danger' variant='light' onClick={onClose}>
					Cancel
				</Button>
				<Button color='primary' onClick={handleSubmit}>Save</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
	)
}
EditModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	todo: PropTypes.object.isRequired,
	updateTodo: PropTypes.func.isRequired
}
export default EditModal