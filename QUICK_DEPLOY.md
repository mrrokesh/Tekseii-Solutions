# Quick Deploy Edge Function

## Prerequisites

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Get Resend API Key:
- Sign up at https://resend.com
- Go to API Keys → Create API Key
- Copy the key (starts with `re_`)

## Quick Steps

```bash
# 1. Login to Supabase
supabase login

# 2. Link your project
supabase link --project-ref jcasjbwncrgpdssuctwb

# 3. Create function (if not exists)
supabase functions new smooth-responder

# 4. Set Resend API key
supabase secrets set RESEND_API_KEY=your_resend_api_key_here

# 5. Deploy function
supabase functions deploy smooth-responder
```

## That's It!

After deployment:
- Forms will send email notifications
- Emails go to: info@tekseiisolutions.com
- Check Supabase Dashboard → Edge Functions → smooth-responder → Logs for debugging

## Test

1. Submit a form on your website
2. Check your email inbox
3. You should receive the notification!

## Troubleshooting

**Function not found?**
- Make sure you deployed: `supabase functions deploy smooth-responder`

**CORS error?**
- The function includes CORS headers, should work after deployment

**Email not sending?**
- Check Resend API key is set: `supabase secrets list`
- Verify domain in Resend Dashboard (if using custom domain)

