import { Card, CardHeader } from "@nextui-org/card"
import CardItem from "./Card"
import { useTheme } from "./ThemeContext"
import { useEffect, useState } from "react"
import { useDisclosure } from "@nextui-org/react"
import axios from "axios"
import ModalRegisterCheck from "./modalUserRegisterCheck"
import { Link } from "react-router-dom"

const Register = () => {

	const [username, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [register, setRegister] = useState(null)

	const [theme, setTheme] = useState("")
	const { darkMode } = useTheme()
	const {isOpen, onClose, onOpen} = useDisclosure()

	const checkEmail = (users) => {
		return users.find((user) => user.email === email) || null
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try{
			const res = await axios.get("http://localhost:6001/users")
			const user = checkEmail(res.data)

			if (user) {
				setRegister(false)
			} else {
				const newUser = { username, email, password }
				await axios.post("http://localhost:6001/users", newUser)
				setRegister(true)
			}
			onOpen()
		} catch (error) {
			console.log('error register', error);
		}
	}

	useEffect(() => {
		setTheme(darkMode ? 'dark text-foreground' : '')
	}, [darkMode])

	return (
		<div className={`${theme} container`}>
			<div className="wrapper-card ml-auto mr-auto max-w-[400px] w-[100%]">
				<CardItem className='ml-auto mr-auto'>
					<Card className="max-w-[400px] w-[100%] form-card mb-3 ">
						<CardHeader className="p-0 block">
							<form onSubmit={handleSubmit}> 
								<h1 className="todo-card__title-login mb-3 ml-2 mt-3 text-center">Register User</h1>
								<div className="p-3 mb-3 label-container">
									<div className="input-container mr-3 ml-3">
										<input type="text" id="title" placeholder="Name" value={username} onChange={(e) => setUserName(e.target.value)} required/>
									</div>
								</div>
								<div className="p-3 pt-0  mb-3 label-container">
									<div className="input-container mr-3 ml-3">
										<input  type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
									</div>
								</div>
								<div className="p-3 pt-0  mb-3 label-container">
									<div className="input-container mr-3 ml-3">
										<input  type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
									</div>
								</div>
								<div className="btn-container m-3 mb-6 ml-auto mr-auto pl-6 pr-6">
									<button className="btn btn-log" type="submit"><p>Register</p></button>
								</div>
							</form>
						</CardHeader>
					</Card>
				</CardItem>
			</div>
				{isOpen && (<ModalRegisterCheck register={register} isOpen={isOpen} onClose={onClose}/>)}
				<div className="p-3">Already have an account? <Link to={'/login'}><span className="underline">Sign in here...</span></Link></div>
		</div>
	)
} 
export default Register