import React from "react"
import "./assets/styles/main.scss"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import HomeIndex from "./components/home/HomeIndex"
// import AdminIndex from "./components/admin-controls/AdminIndex"
import BusinessShowIndex from "./components/business-show/BusinessShowIndex"

const App: React.FC = () => {
	return (
		<Container className="app-container" fluid="md">
			<Router>
				<Routes>
					<Route path="/" element={<BusinessShowIndex />} />
					{/* <Route path="/" element={<HomeIndex />} />
					<Route path="/user" element={<AdminIndex />} />
					<Route path="/rilocalwoodworks" element={<BusinessShowIndex />} /> */}
				</Routes>
			</Router>
		</Container>
	)
}

export default App
