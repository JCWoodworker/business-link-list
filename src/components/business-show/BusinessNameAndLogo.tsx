import React from "react"
import { Row, Col, Image } from "react-bootstrap"

import { businessNameAndLogo } from "../../hardCodedLinks/hardCodedLinks"

const BusinessNameAndLogo: React.FC = () => {
	return (
		<Row className="business-name-and-logo-row">
			<Col className="justify-content-center d-flex align-items-center justify-content-center">
				<Image
					className="business-logo-image"
					src={businessNameAndLogo.logoUrl}
					thumbnail
					fluid
				/>
			</Col>
			<Col className="d-flex align-items-center justify-content-center d-none d-lg-flex">
				<h1 className="business-name">{businessNameAndLogo.businessName}</h1>
			</Col>
		</Row>
	)
}

export default BusinessNameAndLogo
