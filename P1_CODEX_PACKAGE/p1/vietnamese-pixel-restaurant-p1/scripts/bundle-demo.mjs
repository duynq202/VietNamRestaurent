/** P1-only bundler: writes a standalone offline HTML for non-module JS from tsc.
 * This is not a production JS bundler. */
import { readFile, writeFile } from 'node:fs/promises';
const html = await readFile('index.html','utf8');
const css = await readFile('styles.css','utf8');
const modules = [];
for (const name of ['demo-model','scene','main']) {
  const js = await readFile(`dist/${name}.js`,'utf8');
  modules.push(js.split('\n').filter(line => !line.startsWith('import ')).join('\n')
    .replaceAll('export function ','function ')
    .replaceAll('export class ','class ')
    .replaceAll('export const ','const '));
}
const output = html
  .replace('<link rel="stylesheet" href="./styles.css" />',`<style>\n${css}\n</style>`)
  .replace('<script type="module" src="./dist/main.js"></script>','')
  .replace('</body>',`<script>\n(()=>{\n${modules.join('\n')}\n})();\n</script>\n</body>`);
if(output.includes('src="./dist/')||output.includes('href="./styles.css"'))throw new Error('Standalone bundle has unresolved assets');
await writeFile('PLAY_DEMO.html',output);
console.log('Built PLAY_DEMO.html for local offline review');
