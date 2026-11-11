import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resellerWhatsappLink} from '../lib/reseller-message.mjs';
import {minimumOrder,amountToMinimum} from '../lib/business.mjs';

test('reseller WhatsApp uses business destination and actual applicant data',()=>{
 const data={name:'Café & Tienda',phone:'8331234567',email:'contacto@example.com',address:'Calle 1, Madero',instagram:'@tienda',facebook:'Mi negocio',business:'Cafetería',reason:'Emprender\ny crecer',quantity:'100',goal:'150 piezas semanales'};
 const link=new URL(resellerWhatsappLink(data));assert.equal(link.hostname,'wa.me');assert.equal(link.pathname,'/5218333932616');const body=link.searchParams.get('text');
 for(const value of Object.values(data))assert(body.includes(value),value);
 assert(body.includes('*CLIENTE INTERESADO EN REVENDER'));assert(!body.includes('TikTok'));
});
test('optional reseller answers can be omitted without breaking the message',()=>{
 const body=new URL(resellerWhatsappLink({name:'Ana',phone:'8331234567',address:'Madero',business:'Tienda',quantity:'100'})).searchParams.get('text');assert(!body.includes('undefined'));assert(body.includes('Por confirmar'));
});
test('minimum remains at 400 with wholesale prices and zero balance after qualifying',()=>{
 assert.equal(minimumOrder,400);assert.equal(amountToMinimum(5),395);assert.equal(amountToMinimum(395),5);assert.equal(amountToMinimum(400),0);assert.equal(amountToMinimum(405),0);
});
