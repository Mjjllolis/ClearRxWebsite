'use client';

import { useState } from 'react';
import { ctaDetails } from '@/data/cta';
import Container from './Container';

const WEBHOOK_URL = 'https://prod-69.westus.logic.azure.com:443/workflows/e6558ca33ec14493ae800efb2d84d5e3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9IHmuYEn4q98L528_bKeSAq_Fv-g2SyFB-05kaRcTiQ';

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            alert('Please fill out required fields.');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('There was an error submitting the form.');
            }
        } catch (err) {
            console.error(err);
            alert('Submission failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="cta" className="relative medical-section bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 overflow-hidden">
            {/* Medical pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
            </div>

            {/* Floating medical elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-500"></div>
            </div>

            <Container>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Limited Pilot Program Spots Available
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {ctaDetails.heading}
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            {ctaDetails.subheading}
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks for your interest!</h3>
                                <p className="text-gray-600">We'll be in touch soon about the ClearRx pilot program.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name *"
                                        className="w-full rounded-xl bg-white/20 border border-white/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 transition"
                                        required
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com *"
                                        className="w-full rounded-xl bg-white/20 border border-white/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 transition"
                                        required
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className="w-full rounded-xl bg-white/20 border border-white/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white/90">Message</label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        rows={4} 
                                        className="w-full rounded-xl bg-white/20 border border-white/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 transition" 
                                        placeholder="Tell us about your interest in ClearRx or how you'd like to get involved..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl bg-white text-blue-600 font-semibold text-lg transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                            Send Message
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                )}
            </div>
        </Container>
    </section>
    );
};

export default CTA;