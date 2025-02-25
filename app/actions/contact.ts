'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the schema for form validation
const ContactFormSchema = z.object({
  'first-name': z.string().min(1, 'First name is required'),
  'last-name': z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required').max(500, 'Message must be less than 500 characters'),
  'project-type': z.enum(['liner-replacement', 'new-pool', 'other']),
});

// Type for the form data
type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function sendContactForm(formData: FormData) {
  try {
    // Convert FormData to a regular object
    const rawFormData = Object.fromEntries(formData.entries());
    
    // Validate the form data
    const validatedFields = ContactFormSchema.safeParse(rawFormData);
    
    // If validation fails, return the errors
    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    const data = validatedFields.data;
    
    // Format the email content with styled HTML
    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #374151;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .logo {
              width: 200px;
              margin-bottom: 20px;
            }
            .header {
              background-color: #f3f4f6;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 24px;
            }
            .content {
              background-color: white;
              padding: 24px;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
            }
            .field {
              margin-bottom: 16px;
            }
            .label {
              font-weight: 600;
              color: #111827;
            }
            .message {
              white-space: pre-wrap;
              background-color: #f9fafb;
              padding: 16px;
              border-radius: 6px;
              margin-top: 8px;
            }
            a {
              color: #2563eb;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <img src="https://aquamatepool.com/assets/logo-aquamate.svg" alt="AquaMate Pool" class="logo">
          <div class="header">
            <h1 style="margin: 0; color: #111827; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 8px 0 0 0; color: #6b7280;">Received on ${new Date().toLocaleString()}</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span>${data['first-name']} ${data['last-name']}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span><a href="mailto:${data.email}">${data.email}</a></span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span>${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">Project Type:</span>
              <span>${data['project-type'].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="message">${data.message}</div>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Send the email using Resend
    const { data: emailResponse, error } = await resend.emails.send({
      from: 'AquaMate Contact Form <no-reply@aquamatepool.com>',
      to: ['sales@aquamatepool.com'],
      subject: `New Contact Form Submission from ${data['first-name']} ${data['last-name']}`,
      html: emailContent,
      replyTo: data.email,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'Failed to send your message. Please try again later.',
      };
    }
    
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error in sendContactForm:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
