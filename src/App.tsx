import React from "react"
import "./assets/styles/main.scss"
import { Container } from "react-bootstrap"

import BusinessLogo from "./components/BusinessLogo"
import SocialLinks from "./components/SocialLinks"
import WebLinks from "./components/WebLinks"

const App: React.FC = () => {
	return (
		<Container className="app-container" fluid="md">
			<BusinessLogo />
			<SocialLinks />
			<WebLinks />
		</Container>
	)
}

export default App
