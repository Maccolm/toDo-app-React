import { Card, CardHeader } from "@nextui-org/card"
import CardItem from "./Card"
import { useTheme } from "./useTheme"
import { useEffect, useState } from "react"
import { useDisclosure } from "@nextui-org/react"
import ModalRegisterCheck from "./modalUserRegisterCheck"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

const Register = () => {

	const [username, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [register, setRegister] = useState(null)
	const navigate = useNavigate()

	const [theme, setTheme] = useState("")
	const { darkMode } = useTheme()
	const {isOpen, onClose, onOpen} = useDisclosure()

	const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { username, email, password };
      const res = await api.post("/register", newUser);
      setRegister(true);
      onOpen();
    } catch (error) {
      console.log("error register", error);
      setRegister(false);
      onOpen();
    }
  };

	useEffect(() => {
		if (!isOpen && register !== null) {
			if(register) navigate('/user')
		}
	},[register, isOpen, navigate])

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
				<div className="p-3 m-auto"><p>Already have an account? <Link to={'/login'}><span className="underline">Sign in here...</span></Link></p></div>
		</div>
	)
} 
export default Register