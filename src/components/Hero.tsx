'use client';

import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59_130_246/0.1)_1px,transparent_0)] bg-[size:24px_24px]"></div>
        </div>

        {/* Floating medical icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-emerald-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-14 h-14 bg-teal-100 rounded-full opacity-50 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    HIPAA Compliant • FDA Approved Database
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Voice-Activated
                    <span className="block text-blue-600">Medication</span>
                    <span className="block text-emerald-600">Management</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Empowering individuals with visual impairments and seniors to manage their medications 
                    <span className="font-semibold text-gray-800">independently</span> through voice commands and AI assistance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Voice-first design for complete accessibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">AI-powered medication guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Enterprise-grade security & privacy</span>
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
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">ClearRx</h3>
                            <p className="text-sm text-gray-500">Voice Assistant</p>
                          </div>
                        </div>
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-2xl p-4">
                          <p className="text-sm text-blue-800 font-medium">"ClearRx, how do I take my blood pressure medication?"</p>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-4">
                          <p className="text-sm text-emerald-800">Take one tablet of Lisinopril 10mg by mouth once daily in the morning. Do not skip doses and avoid potassium supplements.</p>
                        </div>
                      </div>
                      
                      <div className="text-center py-4">
                        <p className="text-xs text-gray-500 italic">[Image of elderly person using smartphone with voice interface and medication bottles in background]</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-15 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;