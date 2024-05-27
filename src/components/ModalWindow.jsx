import React from "react";
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";

export default function ModalWindow({ isOpen, onClose, onDelete, darkMode }){
	const [backdrop, setBackdrop] = React.useState('blur')
	const [theme, setTheme] = useState('')

	useEffect(()=>{
		setTheme(darkMode ?  'dark text-foreground' : '');
	}, [darkMode])
	
	return(
			<Modal className={theme} backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					<ModalHeader className="flex flex-col gap-1">Delete ToDo</ModalHeader>
					<ModalBody>
						<p>Are you sure you want to delete the ToDo?</p>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" variant="light" onClick={onClose}>
							Cancel
						</Button>
						<Button color="primary" onClick={onDelete}>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
	)
}