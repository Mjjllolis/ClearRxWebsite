import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Our mission is to make medication labels universally accessible, empowering individuals of all abilities to easily understand and manage their prescriptions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "How It Works",
            url: "#how-it-works"
        },
        {
            text: "Accessibility",
            url: "#accessibility"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'hello@myclearrx.com',
    telephone: '',
    socials: {
        // Future social media links will be added here
    },
}