'use client';

import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question about ClearRx? We'd love to hear from you. Send us a message 
            and we'll respond as soon as possible.
          </p>
        </div>
        
        <ContactForm />
      </Container>
    </div>
  );
}
