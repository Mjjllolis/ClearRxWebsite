'use client';

import Link from 'next/link';
import React from 'react';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Logo and Description */}
                    <div className="lg:col-span-6">
                        <Link href="/" className="group flex items-center space-x-3 mb-6 w-fit">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
                                <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 group-hover:border-white/30 transition-all duration-300">
                                    <img 
                                        src="/images/Logo.png" 
                                        alt="ClearRx Logo" 
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                                {siteDetails.siteName}
                            </span>
                        </Link>
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-full" />
                            <p className="text-white/90 leading-relaxed text-lg max-w-lg pl-4">
                                {footerDetails.subheading}
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <div className="relative">
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                                <span className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                                Quick Links
                            </h4>
                            <ul className="space-y-4">
                                {footerDetails.quickLinks.map((link, index) => (
                                    <li key={link.text} className="group">
                                        <Link 
                                            href={link.url} 
                                            className="relative flex items-center text-white/80 hover:text-white transition-all duration-300 font-medium py-2 pl-6 -ml-6 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                                        >
                                            <div className="absolute left-0 w-0 h-full bg-white/20 rounded-r-lg transition-all duration-300 group-hover:w-1" />
                                            <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">
                                                {link.text}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <div className="relative">
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                                <span className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                                Contact
                            </h4>
                            <div className="space-y-4">
                                {footerDetails.email && (
                                    <div className="group">
                                        <a 
                                            href={`mailto:${footerDetails.email}`}
                                            className="inline-flex items-center space-x-3 text-white/90 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:border-white/30 hover:bg-white/15 group-hover:transform group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-black/20"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-white/20 rounded-lg blur-sm group-hover:blur-none transition-all duration-300" />
                                                <svg className="relative w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{footerDetails.email}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative mt-16 pt-8">
                    {/* Decorative divider */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-white/30 rounded-full" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/70 text-sm font-medium">
                            &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                        </p>
                        
                        {/* Back to top button */}
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 text-sm font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-white/20"
                        >
                            <span>Back to top</span>
                            <svg 
                                className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-0.5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle gradient overlay at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;