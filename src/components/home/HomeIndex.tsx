import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const HomeIndex: React.FC = () => {
	const [message, setMessage] = useState("")

	// The following GET request us just for testing the new backend ...
	const getMessage = async () => {
		const backendUrl = import.meta.env.VITE_BACKEND_URL_PREPROD
		try {
			const response = await axios.get(
				`${backendUrl}`
			)
			setMessage(response.data.message)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getMessage()
	}, [])
	// END OF TESTING NEW ENDPOINT

	return (
		<>
			<div className="home-index-title">
				<h1>Welcome to the link list app for your business!</h1>
			</div>
			<div>
				<h4>Create just one QR code for your business and send it here!</h4>
				<div className="showcase-customer">
					<h4>Check out our first link-lister: </h4>
					<div className="customer-to-showcase">
						<Link to="rilocalwoodworks">
							<h4>RI Local Woodworks</h4>
						</Link>
					</div>
				</div>
			</div>
			<h4>Soon you'll be able to sign up too ... Thanks for your patience!</h4>
			{/* BEGIN TEST CODE */}
			<p>{`Here's a message: ${message}`}</p>
			{/* END OF TEST CODE */}
		</>
	)
}

export default HomeIndex
