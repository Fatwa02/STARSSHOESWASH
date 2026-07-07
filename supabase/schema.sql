-- STARSSHOESWASH Loyalty Card - Database Schema
-- Jalankan SQL ini di Supabase SQL Editor setelah membuat project.

CREATE TABLE IF NOT EXISTS customers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  stamps INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row Level Security (aman karena anon key hanya dipakai server side)
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "full_access" ON customers
  FOR ALL TO anon
  USING (true)
  WITH CHECK (true);
