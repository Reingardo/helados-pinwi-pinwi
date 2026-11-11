'use client';

import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react';

const defaultSlides = [
  'Bolis de leche de distintos sabores',
  'Bolis de agua de distintos sabores',
  'Paquete de 30 bollos gourmet por $480',
  'Bollos gourmet Pinwi Pinwi',
  'Paletas de Chocorrol, Pingüinos y Gansito',
  'Nuestro surtido de bolis de leche',
  'Nuestro surtido de bolis de agua',
  'Bollos con su bolsita y etiqueta',
  'Esquimales con chocolate y diferentes coberturas',
];

export default function HeroSlideshow({slides=defaultSlides,images,imagePrefix='hero-pinwi-',className='',label='Fotos de nuestros productos'}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const preference = () => setPlaying(!motion.matches);
    const visibility = () => setHidden(document.hidden);
    preference();
    visibility();
    motion.addEventListener('change', preference);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      motion.removeEventListener('change', preference);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);
  const next = (index + 1) % slides.length;
  const source = n => `/assets/${imagePrefix}${images?.[n] ?? n + 1}.webp`;
  const advance = delta => {
    setPlaying(false);
    setIndex(i => (i + delta + slides.length) % slides.length);
  };
  return <div className={`hero-slideshow ${className}`} role="region" aria-roledescription="carrusel" aria-label={label}>
    <div key={index} className={`hero-slide-frame hero-photo${!playing || hidden ? ' is-paused' : ''}`}>
      <div className="hero-slide-current" style={{backgroundImage: `url(${source(index)})`}}>
        <img src={source(index)} alt={slides[index]} width="1200" height="1200" fetchPriority={index === 0 ? 'high' : 'auto'}/>
      </div>
      <div className="hero-slide-next" style={{backgroundImage: `url(${source(next)})`}} aria-hidden="true" onAnimationEnd={event => {
        if (event.animationName === 'pinwi-photo-reveal') setIndex(i => (i + 1) % slides.length);
      }}><img src={source(next)} alt="" width="1200" height="1200"/></div>
      <span className="hero-laser" aria-hidden="true"/>
    </div>
    <div className="hero-slide-controls">
      <button type="button" aria-label="Foto anterior" onClick={() => advance(-1)}><ChevronLeft size={18}/></button>
      <span aria-live={playing ? 'off' : 'polite'}>{index + 1} / {slides.length}</span>
      <button type="button" aria-label="Foto siguiente" onClick={() => advance(1)}><ChevronRight size={18}/></button>
      <button type="button" aria-label={playing ? 'Pausar presentación' : 'Reproducir presentación'} onClick={() => setPlaying(p => !p)}>{playing ? <Pause size={16}/> : <Play size={16}/>}</button>
    </div>
  </div>;
}
