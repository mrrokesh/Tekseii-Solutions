# Deploy Supabase Edge Function for Email Notifications

This guide will help you set up email notifications using Supabase Edge Functions and Resend.

## Prerequisites

1. Supabase account and project
2. Resend account (sign up at https://resend.com)
3. Supabase CLI installed

## Step 1: Install Supabase CLI

```bash
npm install -g supabase
```

Or using other package managers:
```bash
# Using Homebrew (Mac)
brew install supabase/tap/supabase

# Using Scoop (Windows)
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

## Step 2: Login to Supabase

```bash
supabase login
```

This will open your browser to authenticate.

## Step 3: Link Your Project

```bash
supabase link --project-ref jcasjbwncrgpdssuctwb
```

Replace `jcasjbwncrgpdssuctwb` with your actual project reference if different.

## Step 4: Create the Edge Function

```bash
supabase functions new smooth-responder
```

This creates a new function directory: `supabase/functions/smooth-responder/`

**Note:** If you already have the function deployed, you can skip this step and just update the code.

## Step 5: Write the Function Code

Create/edit `supabase/functions/smooth-responder/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || ''

serve(async (req) => {
  try {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        },
      })
    }

    const { to, subject, name, email, phone, course, message, formType } = await req.json()

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }

    const resend = new Resend(RESEND_API_KEY)

    const emailBody = `
      <h2>New ${formType === 'contact' ? 'Contact' : 'Enquiry'} Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Course/Service:</strong> ${course || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
      <hr>
      <p><small>This email was sent from Tekseii Solutions contact form.</small></p>
    `

    const { data, error } = await resend.emails.send({
      from: 'Tekseii Solutions <noreply@tekseiisolutions.com>',
      to: to || 'info@tekseiisolutions.com',
      replyTo: email,
      subject: subject || `New ${formType} Form Submission`,
      html: emailBody,
    })

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    )
  }
})
```

## Step 6: Get Resend API Key

1. Go to https://resend.com
2. Sign up or login
3. Go to **API Keys** section
4. Click **Create API Key**
5. Copy the API key (starts with `re_`)

## Step 7: Set Resend API Key as Secret

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

Replace `your_resend_api_key_here` with your actual Resend API key.

## Step 8: Deploy the Function

```bash
supabase functions deploy smooth-responder
```

You should see output like:
```
Deploying smooth-responder...
Function smooth-responder deployed successfully
```

## Step 9: Verify Domain in Resend (Important!)

To send emails from your domain:

1. Go to Resend Dashboard → **Domains**
2. Click **Add Domain**
3. Enter your domain: `tekseiisolutions.com`
4. Add the DNS records provided by Resend to your domain
5. Wait for verification (can take a few minutes to 24 hours)

**Note:** Until your domain is verified, you can use Resend's test domain for testing, but it's limited.

## Step 10: Test the Function

You can test directly in Supabase Dashboard:

1. Go to **Edge Functions** in Supabase Dashboard
2. Click on `smooth-responder`
3. Click **Invoke** tab
4. Use this test payload:

```json
{
  "to": "info@tekseiisolutions.com",
  "subject": "Test Email",
  "name": "Test User",
  "email": "test@example.com",
  "phone": "1234567890",
  "course": "Test Course",
  "message": "This is a test message",
  "formType": "contact"
}
```

5. Click **Invoke**
6. Check your email inbox

## Step 11: Test on Your Website

1. Refresh your website
2. Submit a form
3. Check your email inbox (`info@tekseiisolutions.com`)
4. You should receive the notification email

## Troubleshooting

### Function Not Found Error
- Make sure you deployed: `supabase functions deploy smooth-responder`
- Check function exists in Supabase Dashboard → Edge Functions

### CORS Error
- The function code includes CORS headers
- Make sure you deployed the latest version

### Email Not Sending
- Verify Resend API key is set: `supabase secrets list`
- Check Resend Dashboard for error logs
- Verify domain is verified in Resend (if using custom domain)

### Permission Denied
- Make sure you're logged in: `supabase login`
- Verify project is linked: `supabase link --project-ref jcasjbwncrgpdssuctwb`

## Update Function

To update the function code:

1. Edit `supabase/functions/smooth-responder/index.ts`
2. Deploy again: `supabase functions deploy smooth-responder`

## View Logs

```bash
supabase functions logs smooth-responder
```

Or in Supabase Dashboard → Edge Functions → smooth-responder → Logs

## Alternative: Use Resend Test Domain

If you haven't verified your domain yet, you can use Resend's test domain temporarily:

Change in the function code:
```typescript
from: 'onboarding@resend.dev',  // Test domain
```

This works for testing but has limitations.

## Complete Setup Checklist

- [ ] Supabase CLI installed
- [ ] Logged in to Supabase
- [ ] Project linked
- [ ] Edge Function created
- [ ] Function code written
- [ ] Resend API key obtained
- [ ] Secret set in Supabase
- [ ] Function deployed
- [ ] Domain verified in Resend (optional but recommended)
- [ ] Tested function in Supabase Dashboard
- [ ] Tested form submission on website

## Next Steps

After deployment:
1. Forms will save to database ✅
2. Email notifications will be sent ✅
3. You'll receive emails at `info@tekseiisolutions.com` ✅

