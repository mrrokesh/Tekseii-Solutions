-- ============================================
-- COMPLETE DATABASE SETUP FOR TEKSEII SOLUTIONS
-- Run this in Supabase SQL Editor
-- ============================================

-- Step 1: Drop all existing policies (clean slate)
DROP POLICY IF EXISTS "Allow public inserts" ON form_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON form_submissions;
DROP POLICY IF EXISTS "Allow anyone to insert" ON form_submissions;
DROP POLICY IF EXISTS "form_submissions_insert_policy" ON form_submissions;
DROP POLICY IF EXISTS "Enable insert for all users" ON form_submissions;

-- Step 2: Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS form_submissions (
  id BIGSERIAL PRIMARY KEY,
  form_type TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 3: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON form_submissions(form_type);

-- Step 4: Enable Row Level Security (keep it enabled for security)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Step 5: Create policy that allows ANYONE to INSERT
-- This is the simplest and most reliable syntax
CREATE POLICY "Enable insert for all users" ON form_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Step 6: Verify the setup (this will show the policy)
SELECT 
  policyname, 
  cmd, 
  roles,
  with_check
FROM pg_policies 
WHERE tablename = 'form_submissions';

-- Expected result: One row with cmd='INSERT' and with_check='true'
-- If you see the policy listed, it's working!
