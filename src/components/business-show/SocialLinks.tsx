import React from "react"
import { Row, Col } from "react-bootstrap"
import { hardCodedSocialMediaLinks } from "../../hardCodedLinks/hardCodedLinks"

import { getIcon } from "../../utilities/getIcon"

const LinkList: React.FC = () => {
	return (
		<div className="social-links-container">
			<Row>
				{hardCodedSocialMediaLinks.map((link) => {
					const socialIcon = getIcon(
						`${link.bootstrapIconClassName} social-media-icon`
					)
					return (
						<Col className="social-link">
							<a href={link.url} target="_blank">
								{socialIcon}
							</a>
						</Col>
					)
				})}
			</Row>
		</div>
	)
}

export default LinkList
