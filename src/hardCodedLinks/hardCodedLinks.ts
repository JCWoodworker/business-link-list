import {
	HardCodedWebLinks,
	HardCodedSocialMediaLinks,
	BusinessNameAndLogo,
} from "../types/interfaces"

export const hardCodedLinks: HardCodedWebLinks[] = [
	// {
	// 	name: 'Win a free cutting board today!!\nField Of Artisans @ The General\'s Market',
	// 	url: "http://www.rilocalwoodworks.com/mailinglist",
	// },
	// {
	// 	name: "Get 20% off your first online purchase!",
	// 	url: "http://www.rilocalwoodworks.com/mailinglist",
	// },
	{
		name: "Shop the online store",
		url: "http://www.rilocalwoodworks.com/shop",
	},
	{
		name: "Portfolio",
		url: "https://rilocalwoodworks.com/commissioned-pieces",
	},
	{
		name: "Contact",
		url: "https://rilocalwoodworks.com/contact",
	},
	{
		name: "Purchase a gift card",
		url: "https://rilocalwoodworks.com/shop/p/ck1zagyrp2jcrcrgovnt07tjqkaewj",
	},
]

export const hardCodedSocialMediaLinks: HardCodedSocialMediaLinks[] = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/rilocalwoodworks",
		bootstrapIconClassName: "bi bi-instagram",
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/RILocalWoodworks",
		bootstrapIconClassName: "bi bi-facebook",
	},
]

export const businessNameAndLogo: BusinessNameAndLogo = {
	businessName: "RI Local Woodworks",
	logoUrl: "https://i.imgur.com/Qlq1hnH.jpg",
}
