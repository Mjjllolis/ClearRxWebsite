import { FiMic, FiEye, FiSmartphone, FiVolumeX, FiShield, FiHeart, FiClock, FiUsers, FiHeadphones } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
  {
    title: "Voice-First Medication Management",
    description: "Manage your medications hands-free with intuitive voice commands designed for independence and ease of use.",
    bullets: [
      {
        title: "Scan & Listen",
        description: "Simply scan your prescription bottle and listen to medication instructions read aloud clearly.",
        icon: <FiEye size={26} />
      },
      {
        title: "Voice Commands",
        description: "Say 'ClearRx, how do I take my blood pressure medication?' and get instant, clear answers.",
        icon: <FiMic size={26} />
      },
      {
        title: "AI-Powered Q&A",
        description: "Ask questions about your medications and get personalized, easy-to-understand responses.",
        icon: <FiSmartphone size={26} />
      },
      {
        title: "Medication Reminders",
        description: "Set voice-activated alarms and reminders to never miss a dose again.",
        icon: <FiClock size={26} />
      }
    ],
    imageSrc: "[Image of elderly person using smartphone to scan prescription bottle with voice interface visible]"
  },
  {
    title: "Designed for Accessibility",
    description: "Built specifically for individuals with visual impairments and seniors, ensuring everyone can manage their health independently.",
    bullets: [
      {
        title: "ADA & WCAG Compliant",
        description: "Fully accessible design meeting all accessibility standards for visual impairments.",
        icon: <FiUsers size={26} />
      },
      {
        title: "Large Text & High Contrast",
        description: "Optional visual elements with clear, readable text for those who prefer or need visual assistance.",
        icon: <FiVolumeX size={26} />
      },
      {
        title: "Audio-First Experience",
        description: "Every function works through voice commands, but visual options remain available when needed.",
        icon: <FiHeadphones size={26} />
      }
    ],
    imageSrc: "[Image of diverse group including visually impaired person and elderly users testing accessibility features]"
  },
  {
    title: "Secure & HIPAA Compliant",
    description: "Your health information is protected with enterprise-grade security and full HIPAA compliance for peace of mind.",
    bullets: [
      {
        title: "Two-Factor Authentication",
        description: "Voice-activated secure login process protects your sensitive medical information.",
        icon: <FiShield size={26} />
      },
      {
        title: "Healthcare Integration",
        description: "Connect with pharmacies and healthcare providers for seamless prescription management.",
        icon: <FiHeart size={26} />
      },
      {
        title: "FDA Database Integration",
        description: "Access to comprehensive, up-to-date medication information from official FDA sources.",
        icon: <FiShield size={26} />
      }
    ],
    imageSrc: "[Image of medical professional consulting with patient using secure tablet interface]"
  }
]