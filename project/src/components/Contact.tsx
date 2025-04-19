import React, { useState } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    } else if (formValues.message.length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormValues({ name: '', email: '', message: '' });
        
        // Reset the success message after some time
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Have questions about our club or want to join? Reach out to us and we'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">IISF Hall<br />kamla Nehru institute of technology,Sultanpur,code 228118</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">programmingclub@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Club Hours</h4>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><span className="font-medium">Monday - Friday:</span> 10:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 12:00 PM - 4:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p className="text-gray-700 dark:text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Enter your name'
                    value={formValues.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                      formErrors.name 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter your email'
                    value={formValues.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                      formErrors.email 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder='Any Queries'
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                      formErrors.message 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md font-medium text-white transition-colors flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;