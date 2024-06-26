import { Modal, ModalContent, ModalHeader, ModalFooter, Button } from "@nextui-org/react";
import { useTheme } from "./useTheme";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

export default function ModalFields({ isOpen, onClose, isOpenErrorLogin }){
	const { darkMode } = useTheme()
	const [theme, setTheme] = useState('') 
	const [text, setText] = useState('')
	
	useEffect(() => {
		setText(isOpenErrorLogin ? 'Wrong email or password' : 'All fields are required')
	},[isOpenErrorLogin])

	useEffect(() => {
		setTheme(darkMode ? "dark text-foreground" : '')
	}, [darkMode])	
	return (
			<Modal className={theme} isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">{text}</ModalHeader>
				<ModalFooter>
					<Button variant="light" color={isOpenErrorLogin ? 'danger' : 'success'} onClick={onClose}>
						Ok
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
ModalFields.propTypes = { 
	isOpen: PropTypes.bool.isRequired, 
	onClose: PropTypes.func.isRequired, 
	isOpenErrorLogin: PropTypes.bool.isRequired 
}