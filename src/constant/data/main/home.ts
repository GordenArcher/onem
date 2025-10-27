interface Navbar {
    id: number
    text: string
    link: string
}

export const NavData: Navbar[] = [
    {
        id: 1,
        text: "How it works",
        link: "how-it-works"
    },
    {
        id: 2,
        text: "Solutions",
        link: "solutions"
    },
        {
        id: 3,
        text: "Pricing",
        link: "pricing"
    },
        {
        id: 4,
        text: "Company",
        link: "company"
    },
    {
        id: 5,
        text: "Resources",
        link: "resources"
    }
]


import { BellRing, BookOpen, ShieldCheck, } from 'lucide-react'
import Image1 from '../../../assets/images/image3.png'
import type { FeaturesTypes } from '../../../types/home/shared'

interface Ratings {
    id: number
    text: string
    image: string;
    ratings_number: number
    ratingStar : number[]
}

export const CompanyRating: Ratings[] = [
    {
        id: 1,
        text: "Software Advice",
        image: Image1,
        ratings_number: 4.8,
        ratingStar: [ 1, 2, 3, 4 ]
    },
    {
        id: 2,
        text: "Capterra",
        image: Image1,
        ratings_number: 4.9,
        ratingStar: [ 1, 2, 3, 4 ]
    }
]




export const Features: FeaturesTypes[] = [
    {
        id: 1,
        icon: BookOpen,
        head: "Personalized Onboarding Workflows",
        description: "Customize onboarding tasks and checklists tailored to individual roles and departments for a seamless experience",
        bg: "#FEF1E1",
        color: "#D97706"
    },
    {
        id: 2,
        icon: ShieldCheck,
        head: "Secure Document Submission",
        description: "Ensure the safety of sensitive personal information with end-to-end encryption and secure authentication methods like OTP.",
        bg: "#DCFEF3",
        color: "#059669"
    },
    {
        id: 3,
        icon: BellRing,
        head: " Automated Reminders",
        description: "Stay on top of every deadline with smart notifications that ensure tasks and document submissions are never missed",
        bg: "#E0EDFF",
        color: "#0041A3"
    }
]
