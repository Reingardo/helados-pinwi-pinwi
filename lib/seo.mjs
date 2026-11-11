import {siteUrl,branches} from './business.mjs';
export const shareImage={url:'/assets/hero-pinwi-5.webp',width:1200,height:1200,alt:'Paletas artesanales de Helados Pinwi Pinwi'};
export function pageMetadata(title,description,path='/'){
 return {title,description,alternates:{canonical:path},openGraph:{title,description,url:path,siteName:'Helados Pinwi Pinwi',locale:'es_MX',type:'website',images:[shareImage]},twitter:{card:'summary_large_image',title,description,images:[shareImage.url]}};
}
export const businessSchema={
 '@context':'https://schema.org','@graph':branches.map((branch,i)=>({
 '@type':'IceCreamShop','@id':`${siteUrl}/#sucursal-${i+1}`,name:`Helados Pinwi Pinwi · ${branch.name}`,url:`${siteUrl}/#visitanos`,telephone:'+528333932616',priceRange:'$',image:`${siteUrl}/assets/${branch.image}.webp`,
 address:{'@type':'PostalAddress',streetAddress:branch.address,addressLocality:'Ciudad Madero',addressRegion:'Tamaulipas',addressCountry:'MX'},
 openingHoursSpecification:{'@type':'OpeningHoursSpecification',opens:'10:00',closes:'19:00'},
 sameAs:['https://www.facebook.com/heladospinwi'],hasMap:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Helados Pinwi Pinwi '+branch.address+' Ciudad Madero Tamaulipas')}`
 }))
};
