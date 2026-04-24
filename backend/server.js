const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ANALYTICS_TOKEN = process.env.ANALYTICS_TOKEN || 'change-this-token';

const ROOT = path.join(__dirname, '..');
const FRONTEND_DIST = path.join(ROOT, 'frontend', 'dist');
const DATA_DIR = path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
  }
}

function readArray(filePath) {
  ensureFile(filePath);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeArray(filePath, arr) {
  fs.writeFileSync(filePath, JSON.stringify(arr, null, 2), 'utf8');
}

function appendItem(filePath, item) {
  const arr = readArray(filePath);
  arr.push(item);
  writeArray(filePath, arr);
}

function sanitizeText(v, max = 2000) {
  return String(v || '').trim().slice(0, max);
}

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.post('/api/contact', (req, res) => {
  const lead = {
    id: Date.now().toString(36),
    createdAt: new Date().toISOString(),
    firstName: sanitizeText(req.body.firstName, 120),
    lastName: sanitizeText(req.body.lastName, 120),
    email: sanitizeText(req.body.email, 200),
    country: sanitizeText(req.body.country, 120),
    service: sanitizeText(req.body.service, 120),
    message: sanitizeText(req.body.message, 4000),
    language: sanitizeText(req.body.language, 20) || 'en',
    page: sanitizeText(req.body.page, 300),
    gdprConsent: Boolean(req.body.gdprConsent),
  };

  if (!lead.firstName || !lead.email || !lead.message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  if (!lead.gdprConsent) {
    return res.status(400).json({ ok: false, error: 'GDPR consent required' });
  }

  appendItem(LEADS_FILE, lead);
  appendItem(EVENTS_FILE, {
    event: 'lead_submitted',
    timestamp: lead.createdAt,
    language: lead.language,
    path: lead.page || '/pages/contact.html',
    service: lead.service || 'not_set',
  });

  return res.json({ ok: true });
});

app.post('/api/analytics/event', (req, res) => {
  const event = {
    event: sanitizeText(req.body.event, 80) || 'unknown',
    timestamp: sanitizeText(req.body.timestamp, 80) || new Date().toISOString(),
    language: sanitizeText(req.body.language, 20) || 'en',
    path: sanitizeText(req.body.path, 300) || '/',
    title: sanitizeText(req.body.title, 240),
    referrer: sanitizeText(req.body.referrer, 500),
  };

  appendItem(EVENTS_FILE, event);
  res.json({ ok: true });
});

app.get('/api/analytics/summary', (req, res) => {
  const token = String(req.query.token || '');
  if (!token || token !== ANALYTICS_TOKEN) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }

  const events = readArray(EVENTS_FILE);
  const leads = readArray(LEADS_FILE);

  const byPage = {};
  const byLanguage = {};
  let pageViews = 0;
  let languageChanges = 0;

  for (const e of events) {
    if (e.event === 'page_view') {
      pageViews += 1;
      byPage[e.path] = (byPage[e.path] || 0) + 1;
    }
    if (e.event === 'lang_change') {
      languageChanges += 1;
    }
    const lang = e.language || 'en';
    byLanguage[lang] = (byLanguage[lang] || 0) + 1;
  }

  res.json({
    ok: true,
    generatedAt: new Date().toISOString(),
    metrics: {
      totalEvents: events.length,
      pageViews,
      languageChanges,
      leads: leads.length,
    },
    byPage,
    byLanguage,
    recentLeads: leads.slice(-10).reverse(),
  });
});

if (fs.existsSync(FRONTEND_DIST)) {
  app.use(express.static(FRONTEND_DIST));
}

// Do not expose server code/data directories through static hosting.
app.use('/backend', (_req, res) => res.status(404).json({ ok: false }));
app.use('/.git', (_req, res) => res.status(404).json({ ok: false }));

app.use(express.static(ROOT));

app.get('*', (req, res) => {
  const requested = path.join(ROOT, req.path);
  if (fs.existsSync(requested) && fs.statSync(requested).isFile()) {
    return res.sendFile(requested);
  }

  if (fs.existsSync(FRONTEND_DIST)) {
    return res.sendFile(path.join(FRONTEND_DIST, 'index.html'));
  }

  return res.status(503).send(
    '<h1>Frontend build not found</h1><p>Run <code>npm run frontend:build</code> and restart server.</p>'
  );
});

app.listen(PORT, () => {
  ensureFile(LEADS_FILE);
  ensureFile(EVENTS_FILE);
  console.log(`Weblio server running on http://localhost:${PORT}`);
});
