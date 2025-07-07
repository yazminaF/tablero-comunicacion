import React, { useEffect, useState } from 'react';

function Pictograma({ texto, imagen }) {
  const [voz, setVoz] = useState(null);

  // Cuando el componente se monta, cargamos las voces disponibles
  useEffect(() => {
    const cargarVoces = () => {
      const vocesDisponibles = window.speechSynthesis.getVoices();
      // Buscamos una voz en español, preferentemente femenina
      const vozElegida = vocesDisponibles.find(
        (v) =>
          v.lang.startsWith("es") &&
          (v.name.toLowerCase().includes("female") ||
           v.name.toLowerCase().includes("mujer") ||
           v.name.toLowerCase().includes("soledad") || 
           v.name.toLowerCase().includes("monica"))
      );
      setVoz(vozElegida || vocesDisponibles[0]); // si no encuentra, usa la primera
    };

    // Algunos navegadores cargan las voces con retraso
    window.speechSynthesis.onvoiceschanged = cargarVoces;
    cargarVoces();
  }, []);

  const hablar = () => {
    const mensaje = new SpeechSynthesisUtterance(texto);
    if (voz) mensaje.voice = voz;
    speechSynthesis.speak(mensaje);
  };

  return (
    <div onClick={hablar} style={{ cursor: 'pointer', margin: 20, textAlign: 'center' }}>
      <img src={imagen} alt={texto} style={{ width: 100 }} />
      <p>{texto}</p>
    </div>
  );
}

export default Pictograma;
