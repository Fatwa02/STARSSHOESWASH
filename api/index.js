const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

app.get('/api/customers', async (req, res) => {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data || []);
});

app.get('/api/customers/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json(null);
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .ilike('name', `%${q}%`)
    .limit(1);
  if (error) return res.json(null);
  res.json(data && data.length > 0 ? data[0] : null);
});

app.post('/api/customers', async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Nama dan nomor telepon wajib diisi' });
  }
  const { data, error } = await supabase
    .from('customers')
    .insert({ name: name.trim(), phone: phone.trim(), stamps: 1 })
    .select()
    .single();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

app.post('/api/customers/:id/stamp', async (req, res) => {
  const id = parseInt(req.params.id);
  const { data: customer, error: fetchError } = await supabase
    .from('customers')
    .select('stamps')
    .eq('id', id)
    .single();
  if (fetchError || !customer) {
    return res.status(404).json({ error: 'Customer tidak ditemukan' });
  }
  if (customer.stamps >= 10) {
    return res.status(400).json({ error: 'Stamp sudah penuh (10/10). Reset untuk memulai lagi.' });
  }
  const { data, error } = await supabase
    .from('customers')
    .update({ stamps: customer.stamps + 1 })
    .eq('id', id)
    .select()
    .single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/api/customers/:id/reset', async (req, res) => {
  const id = parseInt(req.params.id);
  const { data, error } = await supabase
    .from('customers')
    .update({ stamps: 0 })
    .eq('id', id)
    .select()
    .single();
  if (error) return res.status(500).json({ error: error.message });
  if (!data) return res.status(404).json({ error: 'Customer tidak ditemukan' });
  res.json(data);
});

app.delete('/api/customers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { error } = await supabase
    .from('customers')
    .delete()
    .eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

app.post('/api/admin/verify', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, error: 'Password salah' });
});

module.exports = app;
