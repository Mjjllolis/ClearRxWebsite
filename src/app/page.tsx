import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import ContactSection from "@/components/ContactSection";
import { siteDetails } from '@/data/siteDetails';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <Benefits />

      {/* How It Works Section - Timeline Design */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Scan Listen Thrive</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to manage your medications independently
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-rose-500 to-pink-700 rounded-full"></div>
            
            {/* Step 1 - Scan */}
            <div className="relative mb-16 md:mb-20">
              <div className="flex items-center justify-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              
              {/* Mobile Title */}
              <div className="md:hidden text-center mt-6 mb-4">
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-100 mx-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-600">Scan</h3>
                  <p className="text-base md:text-lg text-gray-600 mt-2">
                    Use your phone camera to scan your prescription bottle. ClearRx automatically recognizes your medication and <strong className="text-pink-600">immediately reads the basic information aloud</strong> - no questions needed!
                  </p>
                </div>
              </div>
              
              <div className="hidden md:grid lg:grid-cols-2 gap-12 items-center mt-8">
                <div className="lg:text-right">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 lg:ml-auto lg:max-w-lg">
                    <h3 className="text-3xl font-bold text-pink-600 mb-4">Scan</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Use your phone camera to scan your prescription bottle. ClearRx automatically recognizes your medication and <strong className="text-pink-600">immediately reads the basic information aloud</strong> - no questions needed!
                    </p>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="relative">
                    <img 
                      src="/images/PrescriptionBottle.jpg" 
                      alt="Person scanning prescription bottle with smartphone"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-pink-500/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Image */}
              <div className="md:hidden mt-4 mx-4">
                <div className="relative">
                  <img 
                    src="/images/PrescriptionBottle.jpg" 
                    alt="Person scanning prescription bottle with smartphone"
                    className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-pink-500/10 rounded-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Step 2 - Listen */}
            <div className="relative mb-16 md:mb-20">
              <div className="flex items-center justify-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-rose-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zM5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
                  </svg>
                </div>
              </div>
              
              {/* Mobile Title */}
              <div className="md:hidden text-center mt-6 mb-4">
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-100 mx-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-rose-600">Listen</h3>
                  <p className="text-base md:text-lg text-gray-600 mt-2">
                    Ask specific questions like <strong className="text-rose-600">"How many blood pressure pills do I take today?"</strong> and get clear, personalized spoken instructions about your medications.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:grid lg:grid-cols-2 gap-12 items-center mt-8">
                <div className="lg:order-2 lg:text-left">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 lg:mr-auto lg:max-w-lg">
                    <h3 className="text-3xl font-bold text-rose-600 mb-4">Listen</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ask specific questions like <strong className="text-rose-600">"How many blood pressure pills do I take today?"</strong> and get clear, personalized spoken instructions about your medications.
                    </p>
                  </div>
                </div>
                <div className="lg:order-1 lg:pr-8">
                  <div className="relative">
                    <img 
                      src="/images/BlindUsingPhone.jpg" 
                      alt="Person using smartphone with voice interface"
                      className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-rose-500/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Image */}
              <div className="md:hidden mt-4 mx-4">
                <div className="relative">
                  <img 
                    src="/images/BlindUsingPhone.jpg" 
                    alt="Person using smartphone with voice interface"
                    className="w-full h-48 md:h-64 object-cover object-top rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-rose-500/10 rounded-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Step 3 - Thrive */}
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-pink-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Mobile Title */}
              <div className="md:hidden text-center mt-6 mb-4">
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-100 mx-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-700">Thrive</h3>
                  <p className="text-base md:text-lg text-gray-600 mt-2">
                    Set voice-activated reminders and receive medication alerts to never miss a dose. <strong className="text-pink-700">Thrive</strong> with confidence in your medication management.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:grid lg:grid-cols-2 gap-12 items-center mt-8">
                <div className="lg:text-right">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 lg:ml-auto lg:max-w-lg">
                    <h3 className="text-3xl font-bold text-pink-700 mb-4">Thrive</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Set voice-activated reminders and receive medication alerts to never miss a dose. <strong className="text-pink-700">Thrive</strong> with confidence in your medication management.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="relative">
                    <img 
                      src="/images/TakingPill.jpg" 
                      alt="Person confidently taking medication with reminder notification"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-pink-700/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Image */}
              <div className="md:hidden mt-4 mx-4">
                <div className="relative">
                  <img 
                    src="/images/TakingPill.jpg" 
                    alt="Person confidently taking medication with reminder notification"
                    className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-pink-700/10 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="medical-section bg-gradient-to-br from-pink-50 to-rose-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="px-4 md:px-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built for Everyone</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {siteDetails.mission}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Voice-First Design</h4>
                    <p className="text-gray-600">Every feature accessible through voice commands</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Universal Accessibility</h4>
                    <p className="text-gray-600">Designed for individuals of all abilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h4>
                    <p className="text-gray-600">Enterprise-grade security protecting your health information</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 mx-4 md:mx-0">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Pilot Program</h4>
                <p className="text-gray-600">Join our exclusive early access program</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Early access to ClearRx app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-gray-700">Direct feedback to development team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700">Free participation in testing phases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Priority support during pilot</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-gray-700">Shape the final product</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <img 
                  src="/images/DoctorOnTablet.jpg" 
                  alt="Healthcare professional using digital tablet in clinical setting" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default HomePage;
