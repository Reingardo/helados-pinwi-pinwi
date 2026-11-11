import {Snowflake, TrendingUp, Users} from 'lucide-react';
import HeroSlideshow from '../HeroSlideshow';
import ResellerForm from './ResellerForm';
import ProfitExample from './ProfitExample';

export default function ResellerContent(){return <>
      <section className="reseller-intro"><span className="eyebrow">VENDE HELADOS PINWI</span><h1>¿Quieres vender<br/><em>nuestro producto?</em></h1><p>Convierte un antojo en una oportunidad para tu negocio. Nuestros productos te ofrecen excelentes márgenes de ganancia y una deliciosa forma de emprender.</p><p>Únete a nuestro equipo de revendedores oficiales y empieza a generar ingresos con el sabor y la variedad de Helados Pinwi Pinwi.</p></section>
      <div className="reseller-offer"><Snowflake size={26}/><div><b>Nosotros proporcionamos el congelador</b><p>Cuéntanos tu proyecto para conocer la propuesta y las condiciones con nuestro equipo.</p></div><a className="button dark" href="#solicitud-reventa">Quiero vender Pinwi</a></div>
      <figure className="reseller-image"><HeroSlideshow slides={['Punto de venta Pinwi Pinwi con congeladores y surtido de bolis','Cooperativa escolar con congeladores y productos Pinwi Pinwi','Comedor industrial con congeladores y productos Pinwi Pinwi']} imagePrefix="reseller-banner-" className="reseller-slideshow" label="Ideas para vender Helados Pinwi"/><figcaption>Imágenes de referencia de posibles puntos de venta.</figcaption></figure>
      <section className="reseller-benefits" aria-label="Una oportunidad para emprender"><div><TrendingUp/><h2>Vende y genera</h2><p>Una nueva oportunidad de ingresos con productos que tus clientes pueden disfrutar todos los días.</p></div><div><Snowflake/><h2>Nosotros ponemos el congelador</h2><p>Proporcionamos un congelador a clientes potenciales que revenderán nuestros productos. Nuestro equipo te explicará las condiciones y los detalles.</p></div><div><Users/><h2>Hagamos equipo</h2><p>Cuéntanos tu idea. Nos pondremos en contacto para conocer tu negocio y ayudarte a comenzar.</p></div></section>
      <ProfitExample/>
      <ResellerForm/>
</>;}
