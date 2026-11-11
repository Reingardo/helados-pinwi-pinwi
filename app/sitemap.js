import {siteUrl} from '../lib/business.mjs';
export const dynamic='force-static';
export default function sitemap(){return ['','agenda-tu-evento/','vende-helados-pinwi/'].map((path,i)=>({url:`${siteUrl}/${path}`,changeFrequency:'weekly',priority:i===0?1:0.8}))}
