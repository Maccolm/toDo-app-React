const users = [
	 {
      "id": "7a62",
      "username": "vitalii",
      "email": "16elvis16@gmail.com",
      "password": "sasasa"
    }
]

exports.handler = async (event, context) => {
	if (event.httpMethod === "GET") {
		return {
			statusCode: 200,
			body: JSON.stringify(users)
		}
	} else if (event.httpMethod === 'POST') {
		const user = JSON.parse(event.body)
		users.push(user)
		return {
			statusCode: 201,
			body: JSON.stringify(user),
		}
	} else {
		return {
			statusCode: 201,
			body: JSON.stringify({ error: 'Method Not Allowed' }),
		}
	}
}