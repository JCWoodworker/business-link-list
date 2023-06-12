import React from "react"
import { Link } from "react-router-dom"

const HomeIndex: React.FC = () => {
	return (
		<>
			<div className="home-index-title">
				<h1>Welcome to the link list app for your business!</h1>
			</div>
			<div>
				<h4>Create just one QR code for your business and send it here!</h4>
				<div className="showcase-customer">
					<h4>Check out our first link-lister: </h4>
					<div className="RILW">
						<Link to="rilocalwoodworks">
							<h4>RI Local Woodworks</h4>
						</Link>
					</div>
				</div>
			</div>
			<h4>Soon you'll be able to sign up too ... Thanks for your patience!</h4>
		</>
	)
}

export default HomeIndex
