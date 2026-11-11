'use client';

import {useState} from 'react';
import {Minus, Plus} from 'lucide-react';

export default function QuantityPicker({name, value, onChange}) {
  const [draft, setDraft] = useState(null);
  function update(text) {
    if (!/^\d*$/.test(text)) return;
    const quantity = text === '' ? 0 : Number(text);
    if (!Number.isSafeInteger(quantity)) return;
    setDraft(text);
    onChange(quantity);
  }
  function step(delta) {
    setDraft(null);
    const quantity = Math.max(0, value + delta);
    if (Number.isSafeInteger(quantity)) onChange(quantity);
  }
  return <div className="catalog-quantity" role="group" aria-label={`Cantidad de ${name}`}>
    <button type="button" disabled={value === 0} aria-label={`Quitar uno de ${name}`} onClick={() => step(-1)}><Minus size={16}/></button>
    <input type="text" inputMode="numeric" pattern="[0-9]*" aria-label={`Cantidad de ${name}`} autoComplete="off" value={draft ?? String(value)} onFocus={() => setDraft(String(value))} onChange={e => update(e.target.value)} onBlur={() => setDraft(null)} onKeyDown={e => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        step(e.key === 'ArrowUp' ? 1 : -1);
      }
    }}/>
    <button type="button" aria-label={`Agregar ${name}`} onClick={() => step(1)}><Plus size={16}/></button>
  </div>;
}
