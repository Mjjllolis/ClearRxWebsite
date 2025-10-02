'use client';

import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';
import { siteDetails } from '@/data/siteDetails';

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden pb-12 md:pb-0"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(233_30_99/0.1)_1px,transparent_0)] bg-[size:24px_24px]"></div>
        </div>

        {/* Floating medical icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-rose-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-14 h-14 bg-pink-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center pt-32 md:pt-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {siteDetails.tagline.toUpperCase()}
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="text-pink-600">Scan </span>
                    <span className="text-rose-600">Listen </span>
                    <span className="text-pink-700">Thrive</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    {siteDetails.mission}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Scan your medication and automatically hear information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Ask questions about your medications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Set reminders and thrive with your health</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="medical-button-primary">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Join Pilot Program
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Main illustration placeholder */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm">
                            <img 
                              src="/images/Logo.png" 
                              alt="ClearRx Logo" 
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">ClearRx</h3>
                            <p className="text-sm text-gray-500">Voice Assistant</p>
                          </div>
                        </div>
                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-pink-50 rounded-2xl p-4">
                          <p className="text-sm text-pink-800 font-medium">"ClearRx, how do I take my blood pressure medication?"</p>
                        </div>
                        <div className="bg-rose-50 rounded-2xl p-4">
                          <p className="text-sm text-rose-800">Take one tablet of Lisinopril 10mg by mouth once daily in the morning. Do not skip doses and avoid potassium supplements.</p>
                        </div>
                      </div>
                      
                      <div className="text-center py-6">
                        <img 
                          src="/images/GeneralMonitorWhitebackground.jpg" 
                          alt="Medical monitoring device with clear display" 
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full opacity-15 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;