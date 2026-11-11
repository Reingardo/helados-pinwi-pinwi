import './style.css';
import './reseller.css';
import './optimization.css';
import Measurement from './Measurement';
import {siteUrl} from '../lib/business.mjs';
import {pageMetadata,businessSchema} from '../lib/seo.mjs';
export const metadata={metadataBase:new URL(siteUrl),...pageMetadata('Helados Pinwi Pinwi | Mayoreo en Ciudad Madero y Tampico','Bolis, paletas, bollos y nieves a precio de mayoreo. Pedidos desde $400 con envío gratis en zona de entrega de Tampico, Ciudad Madero y Altamira.'),icons:{icon:'/assets/logo-pinwi-transparente.png'}};
export default function RootLayout({children}){return <html lang="es-MX"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(businessSchema).replaceAll('<','\\u003c')}}/>{children}<Measurement/></body></html>}
