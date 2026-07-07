const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'customers.json');
const ADMIN_PASSWORD = 'starsshoesadmin123';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function readCustomers() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeCustomers(customers) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(customers, null, 2), 'utf-8');
}

app.get('/api/customers', (req, res) => {
  const customers = readCustomers();
  res.json(customers);
});

app.get('/api/customers/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.json(null);
  const customers = readCustomers();
  const found = customers.find(
    c => c.name.toLowerCase().includes(q.toLowerCase())
  );
  res.json(found || null);
});

app.post('/api/customers', (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Nama dan nomor telepon wajib diisi' });
  }
  const customers = readCustomers();
  const newCustomer = {
    id: Date.now(),
    name: name.trim(),
    phone: phone.trim(),
    stamps: 1,
    createdAt: new Date().toISOString()
  };
  customers.push(newCustomer);
  writeCustomers(customers);
  res.status(201).json(newCustomer);
});

app.post('/api/customers/:id/stamp', (req, res) => {
  const id = parseInt(req.params.id);
  const customers = readCustomers();
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Customer tidak ditemukan' });
  }
  if (customers[index].stamps >= 10) {
    return res.status(400).json({ error: 'Stamp sudah penuh (10/10). Reset untuk memulai lagi.' });
  }
  customers[index].stamps += 1;
  writeCustomers(customers);
  res.json(customers[index]);
});

app.post('/api/customers/:id/reset', (req, res) => {
  const id = parseInt(req.params.id);
  const customers = readCustomers();
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Customer tidak ditemukan' });
  }
  customers[index].stamps = 0;
  writeCustomers(customers);
  res.json(customers[index]);
});

app.delete('/api/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let customers = readCustomers();
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Customer tidak ditemukan' });
  }
  customers.splice(index, 1);
  writeCustomers(customers);
  res.json({ success: true });
});

app.post('/api/admin/verify', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, error: 'Password salah' });
});

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`STARSSHOESWASH server running at http://0.0.0.0:${PORT}`);
});