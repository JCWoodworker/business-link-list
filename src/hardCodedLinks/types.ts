export interface IndividualBusinessInformation {
  hardCodedLinks: {
    name: string;
    url: string;
  }[];

  hardCodedSocialMediaLinks: {
    name: string;
    url: string;
    bootstrapIconClassName: string;
  }[];

  businessNameAndLogo: {
    businessName: string;
    logoUrl: string;
  };
}

export interface Businesses {
  [key: string]: IndividualBusinessInformation;
}
