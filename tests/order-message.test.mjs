import {test} from 'node:test';
import assert from 'node:assert/strict';
import {calculateCart} from '../lib/catalog.mjs';
import {orderMessage} from '../lib/order-message.mjs';

const customer = {phone:'833 123 4567',name:'Cliente de prueba',address:'Calle de prueba 12',city:'Ciudad Madero',date:'2026-11-17',time:'13:30',delivery:'domicilio',branch:'Unidad Nacional',payment:'Efectivo',notes:'Sin sustituciones'};
test('formats actual customer data, grouped flavors and exact totals',()=>{
  const message=orderMessage(customer,calculateCart({'ba-0':20,'ba-1':30,'sa-0':60}));
  assert(message.startsWith('📞 *Tel:* 833 123 4567\n\n👤 *Cliente:* Cliente de prueba'));
  assert(message.includes('⭐ *Pinwis de agua (50)*\n* Limón × 20\n* Piña × 30'));
  assert(message.includes('Pinwis de agua: 50 × $5 = $250'));
  assert(message.includes('Sándwich: 60 × $16 = $960'));
  assert(message.includes('💵 *Total a pagar:* $1,210'));
  assert(message.includes('Martes, 17 de noviembre'));
  assert(message.includes('⏰ *Horario:* 1:30 pm'));
  assert(message.includes('Sin sustituciones'));
  assert(!message.includes('Fernando San Pedro'));
});
test('different esquimal prices remain separate and packages keep details',()=>{
  const message=orderMessage(customer,calculateCart({'es-0':1,'en-0':2,'pack-bollos':1}));
  assert(message.includes('Esquimales: 1 × $20 = $20'));
  assert(message.includes('Esquimales: 2 × $25 = $50'));
  assert(message.includes('30 bollos gourmet × 1'));
  assert(message.includes('💵 *Total a pagar:* $550'));
});
test('pickup and payment preference use the selected values',()=>{
  const message=orderMessage({...customer,delivery:'recoger',payment:'Tarjeta',notes:'',time:'00:15'},calculateCart({'ba-0':80}));
  assert(message.includes('📍 *Recoger en sucursal:*\nUnidad Nacional'));
  assert(message.includes('💳 *Forma de pago:* Tarjeta'));
  assert(message.includes('12:15 am'));
  assert(!message.includes('Calle de prueba'));
});
