import Link from 'next/link';
import React from 'react';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">
                                {siteDetails.siteName}
                            </span>
                        </Link>
                        <p className="text-white/90 leading-relaxed max-w-sm">
                            {footerDetails.subheading}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link 
                                        href={link.url} 
                                        className="text-white/80 hover:text-white transition-colors font-medium"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-3">
                            {footerDetails.email && (
                                <a 
                                    href={`mailto:${footerDetails.email}`}
                                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>{footerDetails.email}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 text-center">
                    <p className="text-white/80 text-sm">
                        &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
