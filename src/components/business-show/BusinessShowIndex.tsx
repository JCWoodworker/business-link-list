import React from "react";

import BusinessNameAndLogo from "./BusinessNameAndLogo"
import SocialLinks from "./SocialLinks"
import WebLinks from "./WebLinks"

//TODO: Add a redirect to the URL of the user's choice

const BusinessShowIndex: React.FC = () => {
  return (
    <>
      <BusinessNameAndLogo />
			<SocialLinks />
			<WebLinks />
    </>
  )
}

export default BusinessShowIndex