'use client';

import Image from 'next/image'
import { useState } from 'react';
import { sendContactForm } from '../actions/contact';

// Format phone number as user types
function formatPhoneNumber(value: string): string {
  // Remove all non-digit characters
  const phoneNumber = value.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX
  if (phoneNumber.length <= 3) {
    return phoneNumber;
  } else if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else if (phoneNumber.length <= 10) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  } else {
    // Limit to 10 digits
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
}

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [messageLength, setMessageLength] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    projectType: ''
  });

  // Check if all required fields are filled
  const isFormValid = formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.email.includes('@') &&
    formData.message.trim() !== '' &&
    formData.projectType !== '';
  
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          alt="Contact Us"
          src="/assets/contact-us.webp"
          fill
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          priority
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
             Contact Us
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Whether you're looking to replace your pool liner or start a new pool project, we're here to help. Fill out the form below and we'll get back to you shortly.
            </p>
            {formStatus.success && (
              <div className="mt-6 rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{formStatus.message}</p>
                  </div>
                </div>
              </div>
            )}
            
            {formStatus.success === false && formStatus.message && (
              <div className="mt-6 rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{formStatus.message}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form 
              action={async (formData) => {
                setIsSubmitting(true);
                setFormStatus({});
                
                // Scroll to top to show status message
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                try {
                  const result = await sendContactForm(formData);
                  setFormStatus(result);
                  
                  // Reset form if successful
                  if (result.success) {
                    const form = document.getElementById('contact-form') as HTMLFormElement;
                    if (form) form.reset();
                    setPhoneValue('');
                    setMessageLength(0);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      message: '',
                      projectType: ''
                    });
                  }
                } catch (error) {
                  setFormStatus({
                    success: false,
                    message: 'An unexpected error occurred. Please try again later.',
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }} 
              id="contact-form"
              className="mt-16"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      maxLength={50}
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                        formStatus.errors?.['first-name'] 
                          ? 'outline-red-500' 
                          : 'outline-gray-300'
                      } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600`}
                    />
                  </div>
                  {formStatus.errors?.['first-name'] && (
                    <p className="mt-1 text-sm text-red-600">{formStatus.errors['first-name'][0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      maxLength={50}
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                        formStatus.errors?.['last-name'] 
                          ? 'outline-red-500' 
                          : 'outline-gray-300'
                      } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600`}
                    />
                  </div>
                  {formStatus.errors?.['last-name'] && (
                    <p className="mt-1 text-sm text-red-600">{formStatus.errors['last-name'][0]}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      maxLength={100}
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                        formStatus.errors?.['email'] 
                          ? 'outline-red-500' 
                          : 'outline-gray-300'
                      } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600`}
                    />
                  </div>
                  {formStatus.errors?.['email'] && (
                    <p className="mt-1 text-sm text-red-600">{formStatus.errors['email'][0]}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="phone" className="block font-semibold text-gray-900">
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      placeholder="(555) 123-4567"
                      value={phoneValue}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        setPhoneValue(formatted);
                      }}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                      Tell us about your project
                    </label>
                    <p id="message-description" className={`${messageLength > 450 ? 'text-orange-600' : 'text-gray-400'} ${messageLength >= 500 ? 'text-red-600' : ''}`}>
                      {messageLength}/500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      required
                      placeholder="Please describe your pool project, including size, shape, and any special requirements..."
                      aria-describedby="message-description"
                      value={formData.message}
                      onChange={(e) => {
                        setMessageLength(e.target.value.length);
                        setFormData({...formData, message: e.target.value});
                      }}
                      className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                        formStatus.errors?.['message'] 
                          ? 'outline-red-500' 
                          : messageLength >= 500
                          ? 'outline-orange-500'
                          : 'outline-gray-300'
                      } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600`}
                    />
                  </div>
                  {formStatus.errors?.['message'] && (
                    <p className="mt-1 text-sm text-red-600">{formStatus.errors['message'][0]}</p>
                  )}
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm/6 font-semibold text-gray-900">Project type</legend>
                  <div className={`mt-4 space-y-4 text-sm/6 ${
                    formStatus.errors?.['project-type'] 
                      ? 'text-red-600' 
                      : 'text-gray-600'
                  }`}>
                    <div className="flex gap-x-2.5">
                      <input
                        id="type-liner-replacement"
                        name="project-type"
                        type="radio"
                        value="liner-replacement"
                        checked={formData.projectType === 'liner-replacement'}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-blue-600 checked:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      />
                      <label htmlFor="type-liner-replacement">Liner Replacement</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="type-new-pool"
                        name="project-type"
                        type="radio"
                        value="new-pool"
                        checked={formData.projectType === 'new-pool'}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-blue-600 checked:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      />
                      <label htmlFor="type-new-pool">New Pool Construction</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="type-other"
                        name="project-type"
                        type="radio"
                        value="other"
                        checked={formData.projectType === 'other'}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-blue-600 checked:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      />
                      <label htmlFor="type-other">Other</label>
                    </div>
                  </div>
                  {formStatus.errors?.['project-type'] && (
                    <p className="mt-1 text-sm text-red-600">{formStatus.errors['project-type'][0]}</p>
                  )}
                </fieldset>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2 ${
                    isSubmitting || !isFormValid
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}