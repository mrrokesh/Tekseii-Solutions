# Supabase Setup Guide

Complete setup instructions for Supabase database and email notifications.

## Quick Setup (5 Minutes)

### Step 1: Create Database Table

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy and paste the SQL from `SETUP_DATABASE.sql`
6. Click **Run**
7. You should see: "Success. No rows returned"

### Step 2: Verify API Key

1. In Supabase Dashboard, go to **Settings** → **API**
2. Copy the **anon public** key (should start with `eyJ` or be in format shown)
3. Update `src/config/supabase.js` if needed

### Step 3: Test

1. Refresh your website
2. Submit a form
3. Check Supabase **Table Editor** → `form_submissions` to see the data

## Database Setup SQL

See `SETUP_DATABASE.sql` file for the complete SQL setup.

## Email Notifications (Optional)

To set up email notifications via Resend, see **`DEPLOY_EDGE_FUNCTION.md`** for complete step-by-step instructions.

Quick steps:
1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link project: `supabase link --project-ref jcasjbwncrgpdssuctwb`
4. Create function: `supabase functions new send-email`
5. Deploy: `supabase functions deploy send-email`
6. Set Resend API key: `supabase secrets set RESEND_API_KEY=your_key`

See `DEPLOY_EDGE_FUNCTION.md` for detailed instructions.

## Troubleshooting

### Error: "No API key found"
- Verify your API key in Supabase Dashboard → Settings → API
- Make sure you're using the **anon public** key
- Restart dev server after updating key

### Error: "row-level security policy"
- Run the SQL from `SETUP_DATABASE.sql`
- Make sure you clicked "Run" after pasting SQL
- Verify policy exists: Run `SELECT * FROM pg_policies WHERE tablename = 'form_submissions';`

### Forms Still Not Working
1. Check browser console for errors
2. Verify table exists in Supabase Table Editor
3. Test direct INSERT in SQL Editor:
   ```sql
   INSERT INTO form_submissions (form_type, name, email, phone)
   VALUES ('test', 'Test', 'test@test.com', '1234567890');
   ```

## Environment Variables (Optional)

Create `.env` file in project root:

```env
VITE_SUPABASE_URL=https://jcasjbwncrgpdssuctwb.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## Support

If you encounter issues:
1. Check browser console for specific errors
2. Verify SQL was run successfully in Supabase
3. Check Supabase Dashboard → Table Editor to see if data is being saved
