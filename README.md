# Helados Pinwi Pinwi

Primera versión en Next.js, React y CSS adaptable. Exportación estática a `out/`.

## Desarrollo

Instalar con pnpm y ejecutar `pnpm dev`. Producción: `pnpm build`. Pruebas de precios: `node --test tests/cart.test.mjs`.

## Catálogo y condiciones

`lib/catalog.mjs` contiene 74 variantes de productos y cinco paquetes. Precios en MXN por pieza o paquete, transcritos del menú y promociones proporcionados. Bolis corresponden a Pinwis; bollos corresponden a heladitos del menú. Algunas fotos representan un surtido de la categoría y se indica en la página.

Todos los productos usan siempre su precio de mayoreo del menú proporcionado. Los paquetes conservan su precio anunciado. La política comercial es recibir pedidos desde $400, indicada en la interfaz; la revisión de optimización añade un mínimo obligatorio de $400 al continuar, con el importe faltante visible. El precio de mayoreo se mantiene desde la primera pieza. El negocio confirma las solicitudes por WhatsApp.

Tampico y Ciudad Madero: entregas lunes a sábado. Altamira: sábados. Horario y disponibilidad sujetos a confirmación. Se permite solicitar fecha y hora preferidas; no representa reserva confirmada.

## Pedido y privacidad

El carrito se guarda en el navegador. Los datos personales del formulario permanecen en memoria y se incorporan al enlace de WhatsApp únicamente al confirmar. El cliente debe pulsar Enviar en WhatsApp. No hay API de WhatsApp, envío silencioso, cobro, base de datos de pedidos ni pagos en línea en esta versión. Se solicita la preferencia de pago (efectivo o tarjeta), sujeta a confirmación del negocio; no se cobran tarjetas en esta página.

## Fuentes

- Menú original y fotografías en la carpeta del negocio `HeladosPinwiPinwi`.
- Paquetes Pinwi $500, Bollos de 30 piezas $480, Fiesta $695, Esquimales $445 y Surtido $1,090, según imágenes locales. Existe otra imagen de Bollos de 35 piezas: no se mezcla con la promoción de 30 piezas elegida.
- Direcciones y cobertura confirmadas por el propietario. https://www.facebook.com/heladospinwi consultado desde Chrome el 11 de noviembre de 2026.
- Fachadas suministradas y confirmadas por el propietario: Jardín 20 de Noviembre y Unidad Nacional. La segunda fue editada con ImageGen para retirar vehículos y letreros vecinos.
- Galerías revisadas en Chrome: Pinwi Pinwi y https://www.facebook.com/heladosconito. De Conito solo se usaron referencias visuales, nunca precios ni condiciones comerciales.
- Bolis y nieves: fotos específicas locales/Facebook cuando estaban disponibles; las faltantes se generaron con la herramienta integrada ImageGen usando el empaque real como referencia. El propietario pidió uniformar también mango con chamoy. Cada imagen generada se marca como ilustrativa. Registro de prompts en `design-prompts.json`.

## Eventos

Solicitud de evento por WhatsApp, con datos de contacto, paquete, fecha/hora y detalles. Carrito chico: 150 pinwis por $750. Grande: 200 pinwis por $1,000. La solicitud no reserva la fecha automáticamente ni envía un mensaje de confirmación: el personal lo confirma directamente por WhatsApp.
- Referencias de navegación por sabores y jerarquía visual: https://www.amorino.com/es-mx y https://saltandstraw.com/. Reseñas de referencia: https://wanderlog.com/place/details/447293/amorino. No se reutilizan fotos, marca ni reseñas de esas heladerías.

## Siguiente etapa

Conectar pasarela de pagos cuando el propietario elija proveedor; Apple Pay, Google Pay y tarjeta no están habilitados ni simulados.


## Optimización local de noviembre de 2026

- Paquetes antes del catálogo, tres destacados y acceso a los cinco. Selección inicial de 12 sabores, filtros y acceso a las 74 variantes. Las categorías permanecen visibles al recorrer el catálogo.
- Portada con pedido mínimo, envío en zona y tres imágenes sin promociones duplicadas. Barrido amarillo de 0.72 s, seis segundos por foto; controles y movimiento reducido.
- Se conserva el formulario de eventos al revisar y editar, incluidos fecha, hora y pago.
- Reventa: cinco campos obligatorios, detalles opcionales y resumen por WhatsApp al 833 393 2616, por decisión del propietario al no contar con un dominio de correo. No se instaló ningún recurso de Resend ni se envía correo.
- Ambas sucursales: 10:00 a. m. a 7:00 p. m. No se añaden condiciones de traslado o atención de carritos, por indicación del propietario.
- Ejemplo interactivo de ganancia bruta con precio de compra de boli $5 y precio de venta definido por el visitante. No representa una promesa de ingresos ni un precio de venta obligatorio.
- Preguntas frecuentes, enlace al Facebook oficial, metadatos por página, Open Graph, sitemap, robots y datos estructurados de ambas sucursales. No se inventan reseñas, calificaciones, tamaños ni condiciones del congelador. Las reseñas verificables y medidas quedan pendientes de datos reales del negocio.
- Vercel Web Analytics y eventos de producto agregado, inicio/revisión de pedido y apertura de WhatsApp para pedido, evento y reventa. No se registran nombres, teléfonos, direcciones, textos libres ni parámetros de la URL. Abrir WhatsApp se distingue de una venta confirmada. En desarrollo se puede revisar el registro en consola; la recopilación real requiere publicar y habilitar Web Analytics en Vercel. No se han activado servicios de pago.
- Todo permanece local hasta autorización de push/deploy.

Pruebas: `node --test tests/*.test.mjs`.
