import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";
import { useTheme } from "./ThemeContext";
import { useEffect } from "react";
import { useState } from "react";

export default function ModalFields({ isOpen, onClose }){
	const { darkMode } = useTheme()
	const [theme, setTheme] = useState('') 

	useEffect(() => {
		setTheme(darkMode ? "dark text-foreground" : '')
	}, [darkMode])	
	return (
			<Modal className={theme} isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">All fields are required</ModalHeader>
				<ModalFooter>
					<Button color="success" variant="light" onClick={onClose}>
						Ok
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}