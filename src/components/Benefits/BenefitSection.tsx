"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
    index: number;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight, index }) => {
    const { title, description, imageSrc, bullets } = benefit;
    
    // Define different gradient overlays for each section
    const overlayGradients = [
        "from-pink-600/95 via-pink-500/90 to-transparent", // Voice-First
        "from-rose-600/95 via-rose-500/90 to-transparent", // Accessibility  
        "from-pink-800/95 via-pink-700/90 to-transparent"  // Security
    ];
    
    const textColors = [
        "text-pink-600", // Voice-First
        "text-rose-600", // Accessibility
        "text-pink-800"  // Security
    ];
    
    const currentGradient = overlayGradients[index] || overlayGradients[0];
    const currentTextColor = textColors[index] || textColors[0];

    return (
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={imageSrc} 
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className={clsx(
                    "absolute inset-0 z-10",
                    imageAtRight ? "bg-gradient-to-l" : "bg-gradient-to-r",
                    currentGradient
                )}></div>
            </div>
            
            {/* Content */}
            <motion.div
                className="relative z-20 h-full flex items-center py-24 md:py-20"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className={clsx(
                        "grid lg:grid-cols-2 gap-16 items-center",
                        imageAtRight ? "" : "lg:grid-cols-[1fr_0.5fr]"
                    )}>
                        {/* Text Content */}
                        <div className={clsx(
                            "space-y-8",
                            imageAtRight ? "lg:order-2" : ""
                        )}>
                            <motion.div
                                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20"
                                variants={childVariants}
                            >
                                {/* Only show title on mobile */}
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:hidden">
                                    {title}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                                    {description}
                                </p>
                                
                                {/* Feature Grid */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {bullets.map((bullet, bulletIndex) => (
                                        <div key={bulletIndex} className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <div className={clsx(
                                                    "w-12 h-12 rounded-xl flex items-center justify-center text-white",
                                                    index === 0 ? "bg-pink-500" : 
                                                    index === 1 ? "bg-rose-500" : "bg-pink-700"
                                                )}>
                                                    {bullet.icon}
                                                </div>
                                                <h4 className={clsx(
                                                    "text-lg font-bold",
                                                    currentTextColor
                                                )}>
                                                    {bullet.title}
                                                </h4>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-sm pl-15">
                                                {bullet.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Visual Accent - Optional decorative element */}
                        <div className={clsx(
                            "hidden lg:block",
                            imageAtRight ? "lg:order-1" : ""
                        )}>
                            <div className="relative">
                                {/* Floating decorative element */}
                                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transform rotate-6"></div>
                                <div className="relative bg-white/20 rounded-3xl p-8 backdrop-blur-sm border border-white/30 transform -rotate-3">
                                    <div className="text-center">
                                        <h4 className="text-white/95 font-bold text-2xl leading-tight">
                                            {title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection