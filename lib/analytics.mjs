import {track} from '@vercel/analytics';

// Only fixed event names, item IDs, quantities and totals belong here. Never send form values.
export function recordEvent(name,properties={}) {
  if(typeof window==='undefined')return;
  try { track(name,properties); } catch { /* Measurement must never interrupt a purchase. */ }
}
