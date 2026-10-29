// Após editar assets/en.json, execute: npm run translations
import {readFile,writeFile} from 'node:fs/promises';
const dictURL=new URL('../assets/en.json',import.meta.url);
const runtimeURL=new URL('../assets/i18n.js',import.meta.url);
const translations=JSON.parse(await readFile(dictURL,'utf8'));
let source=await readFile(runtimeURL,'utf8');
const begin=source.indexOf('const EN=')+'const EN='.length;
const end=source.indexOf(';\nconst query=',begin);
if(begin<9||end<begin)throw new Error('Estrutura de i18n.js não reconhecida.');
source=source.slice(0,begin)+JSON.stringify(translations,null,2)+source.slice(end);
await writeFile(runtimeURL,source);
console.log('Traduções atualizadas em assets/i18n.js');
