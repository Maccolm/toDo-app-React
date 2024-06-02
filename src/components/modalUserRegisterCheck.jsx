import React from "react";
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

export default function ModalRegisterCheck({ isOpen, onClose, register }){
	const [backdrop, setBackdrop] = React.useState('blur')
	const { darkMode } = useTheme()
	const [theme, setTheme] = useState('')
	const [header, setHeader] = useState('')
	const [body, setBody] = useState('')

	useEffect(() => {
		if(register){
			setHeader('User Created!')
			setBody('Congratulations, you are registered!')
		} else {
			setHeader('User already exist')
			setBody('Impossible to register a new user, this email already has been registered')
		}
	}, [register])

	useEffect(()=>{
		setTheme(darkMode ?  'dark text-foreground' : '');
	}, [darkMode])
	
	return(
		<Modal className={theme} backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
				<ModalBody>
					<p>{body}</p>
				</ModalBody>
				<ModalFooter>
					<Button color={register ? "success" : "danger"} variant="light" onClick={onClose} >
						Ok
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}