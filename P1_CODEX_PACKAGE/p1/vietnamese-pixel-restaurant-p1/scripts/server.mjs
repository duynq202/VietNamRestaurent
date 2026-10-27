import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml' };
const port = Number(process.env.PORT || '4173');

http.createServer(async (req, res) => {
  try {
    const rawPath = new URL(req.url || '/', 'http://localhost').pathname;
    const wanted = decodeURIComponent(rawPath === '/' ? '/index.html' : rawPath);
    const target = path.resolve(root, `.${wanted}`);
    if (target !== root && !target.startsWith(root + path.sep)) { res.writeHead(403).end('Forbidden'); return; }
    const stat = await fs.stat(target);
    if (!stat.isFile()) { res.writeHead(404).end('Not found'); return; }
    const data = await fs.readFile(target);
    res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
    res.end(data);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(port, '0.0.0.0', () => console.log(`Vietnamese Pixel Restaurant P1 -> http://localhost:${port}`));
