import React from "react"
import { useParams } from "react-router-dom"
import NotFound from "../notFound/NotFound"
import BusinessNameAndLogo from "./BusinessNameAndLogo"
import SocialLinks from "./SocialLinks"
import WebLinks from "./WebLinks"

const BusinessShowIndex: React.FC = () => {
	const { id } = useParams()
	let view = null

	if (typeof id !== "string" || id !== "rilocalwoodworks") {
		view = <NotFound />
	} else {
		view = (
			<>
				<BusinessNameAndLogo />
				<SocialLinks />
				<WebLinks />
			</>
		)
	}
	return <>{view}</>
}

export default BusinessShowIndex
