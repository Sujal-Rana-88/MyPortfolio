import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_i1rjg7a', // Service ID from EmailJS
        'template_1m0qh8j', // Template ID from EmailJS
        formData,
        '6jLC7Lm6kUAV6_Pbi' // PUBLIC ID
      )
      .then(
        (response) => {
          console.log('Message sent successfully', response);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          console.log('Failed to send message', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-8 text-center">
            <span className="text-green-400">&lt;</span>
            Contact Me
            <span className="text-green-400">/&gt;</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>Punjab, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+91 90150-25062</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span>sujalranaop@gmail.com</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
              {status && (
                <p className="mt-4 text-center text-gray-300">
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
