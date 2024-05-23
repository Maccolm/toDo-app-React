import { useState } from "react"
import { Card, CardHeader } from "@nextui-org/card"
import CardItem from "./Card"
import Button from "./Button"
import { Divider } from "@nextui-org/react"

const Form = (create) => {
	return (
		<CardItem>
			<Card className="max-w-[400px] w-[100%] form-card">
				<CardHeader className="p-0 block">
					<form className="">
						<h1 className="todo-card__title mb-3 ml-2">Add a new Todo</h1>
						<Divider className="p-0"/>
						<div className="p-3 label-container">
							<label  htmlFor='title'>
								<p>Title</p>
							</label>
							<div className="input-container mr-3 ml-3">
								<input type="text" id="title" />
							</div>
						</div>
						<div className="p-3 pt-0 label-container">
							<label htmlFor='text'>
								<p>Text</p>
							</label>
							<div className="input-container mr-3 ml-3">
								<input type="text" id="text" />
							</div>
						</div>
						<div className="p-3 pt-0 label-container">
							<label  htmlFor='day'>
								<p>Day</p>
							</label>
							<div className="option-container ml-3 mb-3">
								<select className="w-[100%] p-1 pl-0">
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
							<div className="btn-container m-3 pt-3">
								<Button type="submit"><p>Add New Task</p></Button>
							</div>
						</div>
					</form>
				</CardHeader>
			</Card>
		</CardItem>
	)
}
export default Form