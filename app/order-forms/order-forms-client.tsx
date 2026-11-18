"use client"

import React, { useState } from 'react';

const orderForms = [
  { name: 'Above Ground', url: '/assets/forms/Above Ground.pdf' },
  { name: 'Additional ABs', url: '/assets/forms/Additional ABs.pdf' },
  { name: 'Barbados Left', url: '/assets/forms/Barbados Left.pdf' },
  { name: 'Barbados Right', url: '/assets/forms/Barbados Right.pdf' },
  { name: 'Californian Left', url: '/assets/forms/Californian Left.pdf' },
  { name: 'Californian Right', url: '/assets/forms/Californian Right.pdf' },
  { name: 'Extended Octagon', url: '/assets/forms/Extended Octagon.pdf' },
  { name: 'Freeform', url: '/assets/forms/Freeform.pdf' },
  { name: 'Full L Left', url: '/assets/forms/Full L Left.pdf' },
  { name: 'Full L Right', url: '/assets/forms/Full L Right.pdf' },
  { name: 'Hot Tub', url: '/assets/forms/Hot Tub.pdf' },
  { name: 'Hump Back Kidney Left', url: '/assets/forms/Hump Back Kidney Left.pdf' },
  { name: 'Hump Back Kidney Right', url: '/assets/forms/Hump Back Kidney Right.pdf' },
  { name: 'Kidney Left', url: '/assets/forms/Kidney Left.pdf' },
  { name: 'Kidney Right', url: '/assets/forms/Kidney Right.pdf' },
  { name: 'Kite', url: '/assets/forms/Kite.pdf' },
  { name: 'Lazy L Left', url: '/assets/forms/Lazy L Left.pdf' },
  { name: 'Lazy L Right', url: '/assets/forms/Lazy L Right.pdf' },
  { name: 'Monaco Left', url: '/assets/forms/Monaco Left.pdf' },
  { name: 'Monaco Reverse Left', url: '/assets/forms/Monaco Reverse Left.pdf' },
  { name: 'Monaco Reverse Right', url: '/assets/forms/Monaco Reverse Right.pdf' },
  { name: 'Monaco Right', url: '/assets/forms/Monaco Right.pdf' },
  { name: 'Octagon', url: '/assets/forms/Octagon.pdf' },
  { name: 'Oval', url: '/assets/forms/Oval.pdf' },
  { name: 'Rectangle', url: '/assets/forms/Rectangle.pdf' },
  { name: 'Roman', url: '/assets/forms/Roman.pdf' },
  { name: 'Vinyl Winter Cover', url: '/assets/forms/Vinyl Winter Cover.pdf' }
];

export default function OrderFormsClient() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredForms = orderForms.filter(form =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-8 min-h-[60vh] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Specialty Liner Order Forms</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Download the appropriate order form for your pool shape below. Each form is designed to capture all critical measurements needed for a perfect-fitting liner.<br/>
        Once completed, email your order or any questions to: <a href="mailto:liners@aquamatepool.com" className="text-blue-600 hover:underline">liners@aquamatepool.com</a><br/>
        Our team is ready to assist you with creating your ideal custom pool liner.
      </p>

      <div className="w-full max-w-xl mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </div>

      <ul className="w-full max-w-xl divide-y divide-gray-200 bg-gray-50 rounded-lg shadow">
        {filteredForms.length > 0 ? (
          filteredForms.map((form) => (
            <li key={form.name} className="hover:bg-blue-50 transition">
              <a
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 w-full"
              >
                <span className="text-gray-900">{form.name}</span>
                <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
              </a>
            </li>
          ))
        ) : (
          <li className="px-4 py-6 text-center text-gray-500">No forms found matching your search.</li>
        )}
      </ul>
    </div>
  );
}
