import React from "react"
import "./assets/styles/main.scss"
import { Container } from "react-bootstrap"

import BusinessNameAndLogo from "./components/BusinessNameAndLogo"
import SocialLinks from "./components/SocialLinks"
import WebLinks from "./components/WebLinks"

const App: React.FC = () => {
	return (
		<Container className="app-container" fluid="md">
			<BusinessNameAndLogo />
			<SocialLinks />
			<WebLinks />
		</Container>
	)
}

export default App
