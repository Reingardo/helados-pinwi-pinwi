'use client';
import {useState} from 'react';
const money=value=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',minimumFractionDigits:0,maximumFractionDigits:2}).format(value);
export default function ProfitExample(){
 const [price,setPrice]=useState('6'),[quantity,setQuantity]=useState('100');
 const sale=Number(price),pieces=Number(quantity);
 const valid=price!==''&&quantity!==''&&Number.isFinite(sale)&&sale>=5&&sale<=1000&&Number.isSafeInteger(pieces)&&pieces>=1&&pieces<=100000;
 return <section className="profit-example" aria-labelledby="profit-title"><div><span className="eyebrow">HAZ TUS NÚMEROS</span><h2 id="profit-title">Una idea de lo que <em>puedes generar.</em></h2><p>Ejemplo con bolis a $5 por pieza, nuestro precio de mayoreo. Tú defines tu precio de venta.</p></div><div className="profit-inputs"><label>Precio al que venderías cada boli<input type="number" min="5" max="1000" step="0.5" value={price} onChange={e=>setPrice(e.target.value)}/></label><label>Piezas vendidas<input type="number" min="1" max="100000" step="1" value={quantity} onChange={e=>setQuantity(e.target.value)}/></label><div className="profit-result" role="status" aria-live="polite">{valid?<><span>Ganancia bruta del ejemplo</span><strong>{money((sale-5)*pieces)}</strong><small>Venta {money(sale*pieces)} − compra {money(5*pieces)}</small></>:<span>Indica un precio desde $5 y una cantidad entera de piezas.</span>}</div><p>Ejemplo ilustrativo antes de gastos de operación y otros costos. No es una promesa de ganancias ni un precio de reventa obligatorio.</p></div></section>
}
