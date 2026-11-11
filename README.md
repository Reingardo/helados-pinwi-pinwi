# Helados Pinwi Pinwi

Primera versión en Next.js, React y CSS adaptable. Exportación estática a `out/`.

## Desarrollo

Instalar con pnpm y ejecutar `pnpm dev`. Producción: `pnpm build`. Pruebas de precios: `node --test tests/cart.test.mjs`.

## Catálogo y condiciones

`lib/catalog.mjs` contiene 76 variantes de productos y cinco paquetes. Precios en MXN por pieza o paquete, transcritos del menú y promociones proporcionados. Bolis corresponden a Pinwis; bollos corresponden a heladitos del menú. Algunas fotos representan un surtido de la categoría y se indica en la página.

El precio de mayoreo se activa si el subtotal completo calculado con precios de mayoreo alcanza $400. Los paquetes conservan su precio anunciado. El mínimo de entrega a domicilio es $400; debajo de ese importe se ofrece recoger en sucursal. No se inventa un costo de envío para pedidos menores.

Tampico y Ciudad Madero: entregas lunes a sábado. Altamira: sábados. Horario y disponibilidad sujetos a confirmación. Se permite solicitar fecha y hora preferidas; no representa reserva confirmada.

## Pedido y privacidad

El carrito se guarda en el navegador. Los datos personales del formulario permanecen en memoria y se incorporan al enlace de WhatsApp únicamente al confirmar. El cliente debe pulsar Enviar en WhatsApp. No hay API de WhatsApp, envío silencioso, cobro, base de datos de pedidos ni pagos en línea en esta versión. Pago a la entrega.

## Fuentes

- Menú original y fotografías en la carpeta del negocio `HeladosPinwiPinwi`.
- Paquetes Pinwi $500, Bollos de 30 piezas $480, Fiesta $695, Esquimales $445 y Surtido $1,090, según imágenes locales. Existe otra imagen de Bollos de 35 piezas: no se mezcla con la promoción de 30 piezas elegida.
- Direcciones y cobertura confirmadas por el propietario. https://www.facebook.com/heladospinwi consultado desde Chrome el 11 de noviembre de 2026.
- Fachada local `sucursal.jpg` mostrada como imagen general sin asignarla a una sucursal no verificada.
- Referencias de navegación por sabores y jerarquía visual: https://www.amorino.com/es-mx y https://saltandstraw.com/. Reseñas de referencia: https://wanderlog.com/place/details/447293/amorino. No se reutilizan fotos, marca ni reseñas de esas heladerías.

## Siguiente etapa

Conectar pasarela de pagos cuando el propietario elija proveedor; Apple Pay, Google Pay y tarjeta no están habilitados ni simulados.
