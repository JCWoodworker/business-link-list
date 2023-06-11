import React from "react"
import { Row } from "react-bootstrap"
import { hardCodedLinks } from "../hardCodedLinks/hardCodedLinks"

const LinkList: React.FC = () => {
	return (
		<div className="web-links-container">
			{hardCodedLinks.map((link) => {
				return (
					<Row className="web-link">
						<a href={link.url} target="_blank">{link.name}</a>
					</Row>
				)
			})}
		</div>
	)
}

export default LinkList
