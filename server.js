const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// FNV-1a 64-bit hash matching the Python loader's verification
function fnv1a64(str) {
  let h1 = 0x811C9DC5;
  let h2 = 0x01000193;
  const buffer = Buffer.from(str, 'utf16le');
  for (let i = 0; i < buffer.length; i += 2) {
    if (i + 1 >= buffer.length) break;
    let c = buffer.readUInt16LE(i);
    h1 ^= c & 0xff;
    h1 = Math.imul(h1, 0x01000193) >>> 0;
    if (h1 & 0x80000000) h1 = (h1 ^ 0x69FF6E03) >>> 0;
    h2 ^= (c >> 8) & 0xff;
    h2 = Math.imul(h2, 0x01000193) >>> 0;
    if (h2 & 0x80000000) h2 = (h2 ^ 0x69FF6E03) >>> 0;
  }
  return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}

// 1. Main payload endpoint requested by the loader
app.get('/dl/:key', (req, res) => {
  const payloadContent = "// Insert your compiled/packed payload code here";
  const hash = fnv1a64(payloadContent);
  res.setHeader('X-Build-Hash', hash);
  res.send(payloadContent);
});

// 2. Chain manifest endpoint
app.get('/chain/:key/manifest.json', (req, res) => {
  res.json({
    order: ["ac_bridge.js", "symbols.js", "bypass.js", "quest.js"],
    files: []
  });
});

// 3. Individual chain files endpoint
app.get('/chain/:key/:filename', (req, res) => {
  const filename = req.params.filename;
  const fileContent = `// Content for ${filename}`;
  const hash = fnv1a64(fileContent);
  res.setHeader('X-File-Hash', hash);
  res.send(fileContent);
});

// 4. Hardware ID & gate checks
app.post('/hwid/gate', (req, res) => {
  res.json({ suspended: false });
});

app.post('/hwid/leak', (req, res) => {
  res.json({ suspended: false, inspect: [] });
});

app.listen(PORT, () => {
  console.log(`License server running on port ${PORT}`);
});
