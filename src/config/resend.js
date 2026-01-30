import { Resend } from 'resend'

// Resend API key - should be stored in environment variable
// For now, we'll use it from env or you can set it directly
const resendApiKey = import.meta.env.VITE_RESEND_API_KEY || ''

// Initialize Resend (Note: Resend requires server-side usage)
// We'll create an API route or use Supabase Edge Functions for this
// For now, we'll set up the client structure

export const resend = resendApiKey ? new Resend(resendApiKey) : null

// Email configuration
export const EMAIL_CONFIG = {
  from: 'Tekseii Solutions <noreply@tekseiisolutions.com>',
  to: 'info@tekseiisolutions.com',
  replyTo: 'support@tekseiisolutions.com'
}

