import React from "react";

import BusinessNameAndLogo from "./BusinessNameAndLogo"
import SocialLinks from "./SocialLinks"
import WebLinks from "./WebLinks"

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