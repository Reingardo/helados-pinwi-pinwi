import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire('C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1105-1297-0_26.1105.1297.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/sharp/package.json');
const sharp=require('sharp');
const root='public/assets';
let count=0;
for(const file of await fs.readdir(root)){if(!/\.(png|jpe?g)$/i.test(file))continue;await sharp(path.join(root,file)).resize({width:1400,height:1400,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toFile(path.join(root,file+'.webp'));count++}
console.log(`Optimized ${count} image assets as WebP.`);
