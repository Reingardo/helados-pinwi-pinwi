export const minimumOrder = 400;
export const siteUrl = 'https://sitio-pinwi.vercel.app';
export const businessPhone = '833 393 2616';
export const whatsappUrl = 'https://wa.me/5218333932616';
export const businessHours = '10:00 a. m. a 7:00 p. m.';
export const branches = [
  {name:'Jardín 20 de Noviembre',address:'Calle 9 esquina con Tercera Avenida, Col. Jardín 20 de Noviembre.',image:'sucursal-jardin.png'},
  {name:'Unidad Nacional',address:'Avenida Madero esquina con calle Durango, Col. Unidad Nacional.',image:'sucursal-unidad-editada.png'},
];
export const amountToMinimum = total => Math.max(0, minimumOrder - total);

export const commonQuestions = [
  ['¿Puedo combinar productos y sabores?', 'Sí. Combina bolis, paletas, bollos, nieves, sándwiches y esquimales. El pedido mínimo es de $400 y todos los precios del menú ya son de mayoreo.'],
  ['¿Dónde y cuándo entregan?', 'Entregamos en Tampico y Ciudad Madero de lunes a sábado, y en Altamira los sábados. El envío es gratis desde $400 dentro de nuestra zona de entrega. Confirmamos cobertura y horario por WhatsApp.'],
  ['¿Cuándo se confirma mi pedido?', 'Al terminar se abrirá WhatsApp con tu resumen. Pulsa Enviar allí; nuestro equipo revisará disponibilidad y confirmará tu pedido y horario de entrega.'],
  ['¿Cómo puedo pagar?', 'Indica si prefieres efectivo o tarjeta. La forma de pago se confirma por WhatsApp y pagas a la entrega. No hacemos cobros en esta página.'],
  ['¿Qué presentación tienen los productos?', 'Los precios del menú son por pieza y los paquetes indican su contenido. Si necesitas medidas, ingredientes o información sobre alérgenos de un sabor, consúltanos antes de pedir.'],
  ['¿Puedo visitar una sucursal?', 'Sí. Estamos en Jardín 20 de Noviembre y Unidad Nacional, en Ciudad Madero. Ambas sucursales tienen horario de 10:00 a. m. a 7:00 p. m.; abajo encontrarás sus direcciones y ubicación.'],
];
