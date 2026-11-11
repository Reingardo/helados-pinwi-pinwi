import {whatsappUrl} from './business.mjs';
const value=(data,key)=>String(data[key]||'').trim()||'Por confirmar';
export function resellerMessage(data){return [
 '🧊 *CLIENTE INTERESADO EN REVENDER · CONGELADOR*','*HELADOS PINWI PINWI*','',
 `👤 *Persona o negocio:* ${value(data,'name')}`,`📞 *Teléfono:* ${value(data,'phone')}`,
 `📍 *Zona del negocio:* ${value(data,'address')}`,`🏪 *Tipo de negocio:* ${value(data,'business')}`,
 `📦 *Cantidad inicial:* ${value(data,'quantity')} piezas`,'',
 `✉️ *Correo:* ${value(data,'email')}`,`📱 *Instagram:* ${value(data,'instagram')}`,`📱 *Facebook:* ${value(data,'facebook')}`,'',
 '💬 *Proyecto y motivo para revender:*',value(data,'reason'),'',
 `🎯 *Objetivo semanal:* ${value(data,'goal')}`,'',
 '🧊 *Interés en el congelador:* Sí','',
 'Solicito información para revender sus productos y conocer las condiciones del congelador. Quedo pendiente de que su equipo se ponga en contacto conmigo.'
].join('\n')}
export function resellerWhatsappLink(data){return `${whatsappUrl}?text=${encodeURIComponent(resellerMessage(data))}`}
