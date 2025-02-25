'use client';

import Image from 'next/image'
import { useState } from 'react';
import { sendContactForm } from '../actions/contact';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          alt="Contact Us"
          src="/assets/patterns/contact-us.png"
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
                
                try {
                  const result = await sendContactForm(formData);
                  setFormStatus(result);
                  
                  // Reset form if successful
                  if (result.success) {
                    const form = document.getElementById('contact-form') as HTMLFormElement;
                    if (form) form.reset();
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                      Tell us about your project
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                        formStatus.errors?.['message'] 
                          ? 'outline-red-500' 
                          : 'outline-gray-300'
                      } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600`}
                      defaultValue={''}
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
                  disabled={isSubmitting}
                  className={`rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-500'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
