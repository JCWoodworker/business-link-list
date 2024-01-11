import React from "react"
import { Row } from "react-bootstrap"
import { hardCodedLinks } from "../../hardCodedLinks/hardCodedLinks"

const LinkList: React.FC = () => {
	return (
		<div className="web-links-container">
			<p>Cell: 401-484-0848</p>
			{hardCodedLinks.map((link) => {
				return (
					<Row className="web-link">
						<a href={link.url} target="_blank" className="individual-web-link">{link.name}</a>
					</Row>
				)
			})}
		</div>
	)
}

export default LinkList
