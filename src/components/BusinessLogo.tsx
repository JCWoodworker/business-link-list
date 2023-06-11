import React from "react"
import { Image } from "react-bootstrap"

import { businessLogo } from "../hardCodedLinks/hardCodedLinks"

const BusinessLogo: React.FC = () => {
	return (
		<div className="business-logo-container">
			<Image
				className="business-logo-image yo"
				src={businessLogo.url}
				thumbnail
				fluid
			/>
		</div>
	)
}

export default BusinessLogo
