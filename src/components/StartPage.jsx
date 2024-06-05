import { Card, CardHeader, CardBody, Divider, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import img from '../assets/icons/favicon-portfolio.svg'



export default function StartPage () {
	
	return(
		<Card className='max-w-[500px] m-auto'>
			<CardHeader className="flex gap-6">
				<Image
					alt="Logo"
					height={40}
					width={40}
					radius="sm"
					src={img}
				/>
				<h1 className="greeting-title">Welcome to ToDo App</h1>
			</CardHeader>
			<Divider/>
			<CardBody>
				<div className="mb-5 ml-3">
					<p>Welcome to ToDo app. Here you can create, edit, manage your notes or tasks, to mark them. Let&apos;s try it!</p>
				</div>
				<div className="buttons flex justify-center gap-8">
					<Link to={'/login'}> 
						<Button color="success">Log in</Button>
					</Link>
					<Link to={'/register'}>
						<Button color="primary">Registration</Button>
					</Link>
				</div>
			</CardBody>
		</Card>
	)
}