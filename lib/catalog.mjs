import photoMap from './photo-map.mjs';
const make=(prefix,category,kind,flavors,retail,wholesale,image,photos={})=>flavors.split('|').map((flavor,i)=>({id:`${prefix}-${i}`,category,kind,flavor,name:`${kind} · ${flavor}`,retail,wholesale,image:photos[flavor]||image,...photoMap[`${prefix}-${i}`]}));
export const products=[
...make('ba','Bolis','Boli de agua','Limón|Piña|Uva|Chamoy|Tamarindo|Mango con chile|Fresa agua|Piña con chile',6,5,'bolisagua11.jpg'),
...make('bl','Bolis','Boli de leche','Pistache|Coco|Chicle|Fresa leche|Chocolate|Rompope|Plátano|Nuez|Mango',6,5,'bolis11.jpg',{'Chicle':'bolischicle.jpg','Fresa leche':'bolisfresa.jpg'}),
...make('hl','Bollos','Bollo de leche','Pingüino|Gansito|Fresas con crema|Oreo|Chocorrol|Bubulubu|Mazapán|Coco|Nutella|Pay de limón|Duvalín',18,16,'bollos.jpg',{'Pingüino':'bollopinguino.jpg','Gansito':'bollogansito.jpg','Fresas con crema':'bollofresacrema.jpg','Oreo':'bollooreo.jpg','Chocorrol':'bollochocorol.jpg','Bubulubu':'bollobubulubu.jpg','Mazapán':'bollomasapan.jpg','Nutella':'bollonutela.jpg','Pay de limón':'bollopaylimon.jpg'}),
...make('ha','Bollos','Bollo de agua','Mango chamoy|Picafresa',18,16,'bollosiceee.jpg',{'Mango chamoy':'bollomangochamoy.jpg','Picafresa':'bollopicafresa.jpg'}),
...make('pa','Paletas de agua','Paleta de agua','Chamoy|Melón|Fresa|Limón|Tamarindo|Piña|Uva|Sandía|Mango',18,16,'paletaagua.jpg'),
...make('pl','Paletas de leche','Paleta de leche','Fresa|Nuez|Galleta Oreo|Mango|Chicle|Carlos V|Coco|Mazapán|Rompope',22,20,'paletas.jpg',{'Carlos V':'paletacarlos.jpg'}),
...make('ar','Artesanales','Paleta artesanal','Pingüinos|Gansito|Fresa kiwi|Chocorrol|Guayaba kiwi|Piña Skwinkles|Pay de limón|Cóctel de frutas|Fresas con crema|Mango manzana chile|Mango chamoy panditas',24,22,'paletasartesanales.jpg',{'Pingüinos':'paletapinwino.jpg','Gansito':'paletagansito.jpg','Fresa kiwi':'paletakiwi.jpg','Mango manzana chile':'paletamanzanachile.jpg'}),
...make('ni','Nieves','Nieve','Fresa|Nuez|Vainilla|Oreo|Mango chamoy|Pica fresa|Limón',23,21,'nieves.jpg'),
...make('sa','Sándwiches','Sándwich helado','Fresa|Nuez|Oreo|Vainilla',18,16,'sanwich.jpeg'),
...make('es','Esquimales','Esquimal grande','Clásico',22,20,'esquimales2.jpg'),
...make('ec','Esquimales','Esquimal grande','Coco|Chispas',24,22,'esquimales.jpg',{'Chispas':'esquimalchispoitas.jpg'}),
...make('en','Esquimales','Esquimal grande','Nuez',27,25,'esquimales2.jpg')];
export const packages=[
{id:'pack-pinwi',name:'Paquete Pinwi',detail:'100 pinwis surtidos',retail:500,wholesale:500,image:'PAQUETE100PINWI.jpeg'},
{id:'pack-bollos',name:'Paquete Bollos',detail:'30 bollos gourmet',retail:480,wholesale:480,image:'paquetebollos.jpg',productPhoto:true},
{id:'pack-fiesta',name:'Paquete Fiesta',detail:'75 pinwis + 20 heladitos gourmet',retail:695,wholesale:695,image:'PAQUETEFIESTA.jpeg'},
{id:'pack-esquimal',name:'Paquete Esquimales',detail:'20 piezas: 5 coco, 5 chispitas, 5 nuez y 5 clásicos',retail:445,wholesale:445,image:'esquimalespaquetejpeg.jpeg'},
{id:'pack-surtido',name:'Paquete Surtido',detail:'50 pinwis, 10 nieves, 5 paletas de leche, 5 artesanales, 5 de agua, 5 esquimales, 10 heladitos gourmet y 5 sándwiches',retail:1090,wholesale:1090,image:'PAQUETESURTIDO.jpeg'}];
export const allItems=[...products,...packages];
export const categories=['Todos','Bolis','Bollos','Paletas de agua','Paletas de leche','Artesanales','Nieves','Sándwiches','Esquimales'];
export function calculateCart(cart){
 const lines=Object.entries(cart).map(([id,quantity])=>({item:allItems.find(p=>p.id===id),quantity})).filter(l=>l.item&&Number.isSafeInteger(l.quantity)&&l.quantity>0);
 const wholesaleSubtotal=lines.reduce((s,l)=>s+l.item.wholesale*l.quantity,0);
 const retailSubtotal=lines.reduce((s,l)=>s+l.item.retail*l.quantity,0);
 const isWholesale=wholesaleSubtotal>=400;
 const total=isWholesale?wholesaleSubtotal:retailSubtotal;
 return {lines,wholesaleSubtotal,retailSubtotal,isWholesale,total,savings:retailSubtotal-total,count:lines.reduce((s,l)=>s+l.quantity,0),freeDelivery:total>=400};
}
export const money=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(n);
