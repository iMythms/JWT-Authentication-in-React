import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signIn } from '../../services/authService'

const initialFormData = {
	username: '',
	password: '',
}
const Signin = ({ getUserProfile }) => {
	const [message, setMessage] = useState('')
	const [formData, setFormData] = useState(initialFormData)
	const navigate = useNavigate()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await signIn(formData)
			await getUserProfile()
			setFormData(initialFormData)
			navigate('/dashboard')
		} catch (error) {
			setMessage(error.response?.data?.error)
			console.log(error)
		}
		console.log(formData)
	}

	return (
		<main>
			<h1>Log In</h1>
			<p style={{ color: 'red' }}>{message}</p>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Username:</label>
					<input
						type="text"
						autoComplete="off"
						id="username"
						value={formData.username}
						name="username"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						autoComplete="off"
						id="password"
						value={formData.password}
						name="password"
						onChange={handleChange}
					/>
				</div>
				<section>
					<button>Log In</button>
					<Link to="/">
						<button>Cancel</button>
					</Link>
				</section>
			</form>
		</main>
	)
}

export default Signin
