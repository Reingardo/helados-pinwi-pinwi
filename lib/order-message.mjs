import {money} from './catalog.mjs';

const names = {
  'Boli de agua': 'Pinwis de agua',
  'Boli de leche': 'Pinwis de leche',
  'Bollo de agua': 'Bollos de agua',
  'Bollo de leche': 'Bollos de leche',
  'Paleta de agua': 'Paletas de agua',
  'Paleta de leche': 'Paletas de leche',
  'Paleta artesanal': 'Paletas artesanales',
  'Nieve': 'Nieves',
  'Sándwich helado': 'Sándwich',
  'Esquimal grande': 'Esquimales',
};

export function orderMessage(customer, summary) {
  const groups = new Map();
  for (const {item, quantity} of summary.lines) {
    const name = names[item.kind] || item.name;
    // Keep different unit prices separate, including esquimal toppings.
    const key = `${name}:${item.wholesale}`;
    if (!groups.has(key)) groups.set(key, {name, price: item.wholesale, quantity: 0, details: []});
    const group = groups.get(key);
    group.quantity += quantity;
    group.details.push(`* ${item.flavor || item.detail || item.name} × ${quantity}`);
  }
  const date = new Date(`${customer.date}T12:00:00Z`);
  const formatted = new Intl.DateTimeFormat('es-MX', {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'}).format(date);
  const deliveryDate = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  const [hour, minute] = customer.time.split(':').map(Number);
  const time = `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour >= 12 ? 'pm' : 'am'}`;
  const pickup = customer.delivery === 'recoger';
  return [
    `📞 *Tel:* ${customer.phone.trim()}`, '',
    `👤 *Cliente:* ${customer.name.trim()}`, '',
    pickup ? '📍 *Recoger en sucursal:*' : '📍 *Dirección de entrega:*',
    pickup ? customer.branch : `${customer.address.trim()}, ${customer.city}`, '',
    '📍 *Ubicación:*', 'Por confirmar', '',
    `📅 *Fecha ${pickup ? 'recolección' : 'entrega'}:* ${deliveryDate}`,
    `⏰ *Horario:* ${time}`, '',
    '📦 *Pedido:*', '',
    ...[...groups.values()].flatMap(group => [`⭐ *${group.name} (${group.quantity})*`, ...group.details, '']),
    ...(customer.notes.trim() ? ['📝 *Notas del pedido:*', customer.notes.trim(), ''] : []),
    '🧾 *Desglose:*',
    ...[...groups.values()].map(group => `${group.name}: ${group.quantity} × ${money(group.price)} = ${money(group.price * group.quantity)}`), '',
    `🚚 *Envío:* ${pickup ? 'No aplica · recoger en sucursal' : 'Gratis'}`,
    `💳 *Forma de pago:* ${customer.payment} (por confirmar)`, '',
    `💵 *Total a pagar:* ${money(summary.total)}`, '',
    '✅ *Confirmación del pedido:*',
    'Confirmo mi solicitud con los productos y datos anteriores. Pedido sujeto a confirmación del negocio.',
  ].join('\n');
}
