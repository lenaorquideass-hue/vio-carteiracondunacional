const express = require('express');
const app = express();

const DESTINO_BASE = (process.env.DESTINO_BASE || 'https://SEU-PAINEL-PRINCIPAL.onrender.com').replace(/\/$/, '');

app.get('/v/:codigo', (req, res) => {
  const { codigo } = req.params;
  res.redirect(302, `${DESTINO_BASE}/v/${encodeURIComponent(codigo)}`);
});

app.get('/:prefixo/:codigo', (req, res) => {
  const { prefixo, codigo } = req.params;
  res.redirect(302, `${DESTINO_BASE}/${encodeURIComponent(prefixo)}/${encodeURIComponent(codigo)}`);
});

app.get('/', (_req, res) => {
  res.status(200).send('OK');
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`vio-carteiracondunacional ativo na porta ${port}`);
});
