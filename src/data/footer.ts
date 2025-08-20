import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering individuals with visual impairments and seniors to manage their medications independently.",
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