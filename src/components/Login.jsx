import { Card, CardHeader } from "@nextui-org/card"
import CardItem from "./Card"
import { useTheme } from "./useTheme"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ModalFields from "./ModalFields"
import { Link } from "react-router-dom"
import api from "../services/api"

export default function Login () {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenErrorLogin, setIsOpenErrorLogin] = useState(false) 
 
	const [theme, setTheme] = useState('')
	const { darkMode } = useTheme()

	const navigate = useNavigate()

	const checkUser = (users) => {
		const user = users.find((user) => user.email === email && user.password === password) 
		if (user.email === email && user.password === password){
			return user || null;
		}
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault()

		if(email === '' || password === ''){
			setIsOpenErrorLogin(false)
			setIsOpen(true)
			return
		} 
		try{
			const response = await api.get("/users")
			const user = checkUser(response.data)

			if (user) {
				localStorage.setItem("user", JSON.stringify(user.id))
				navigate("/user")
				setEmail('')
				setPassword('')
			}

		} catch (error) {
			setIsOpenErrorLogin(true)
			setIsOpen(true)
		}
	}	

	useEffect(() => {
		setTheme(darkMode ? 'dark text-foreground' : '')
	}, [darkMode])

	const handleClose = () => {setIsOpen(false)}
	return (
		<div className={`${theme} container`}>
			<div className="wrapper-card ml-auto mr-auto max-w-[400px] w-[100%]">
				<CardItem className='ml-auto mr-auto'>
					<Card className="max-w-[400px] w-[100%] form-card mb-3 ">
						<CardHeader className="p-0 block">
							<form className='mr-3 ml-3' onSubmit={handleSubmit}> 
								<div className="p-3 pt-0 mb-3 mt-5 label-container">
									<div className="input-container">
										<input 
											type="text" 
											id="email" 
											placeholder="Email" 
											value={email} onChange={(e) => setEmail(e.target.value)}/>
									</div>
								</div>
								<div className="p-3 pt-0 mb-5 label-container">
									<div className="input-container">
										<input 
										type="password" 
										id="password" 
										placeholder="password"
										value={password} onChange={(e) => setPassword(e.target.value)}/>
									</div>
								</div>
								<div className="btn-container m-3 mb-6">
									<button className="btn btn-log" type="submit"><p>Log in</p></button>
								</div>
							</form>
						</CardHeader>
					</Card>
				</CardItem>
			</div>
			<div className="p-3 m-auto"><p>New user? <Link to={'/register'}><span className="underline">Sign up here...</span></Link></p></div>
			{isOpen && (<ModalFields isOpen={isOpen} isOpenErrorLogin={isOpenErrorLogin} onClose={handleClose}/>)}
		</div>
	)
}