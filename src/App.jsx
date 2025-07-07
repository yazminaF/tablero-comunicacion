import React, { useState } from 'react';
import './App.css';
import Pictograma from './Pictograma';

function App() {
  const [categoria, setCategoria] = useState("mañana");
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  // 📦 PICTOGRAMAS POR CATEGORÍA
  const pictogramasPorCategoria = {
    mañana: [
      { texto: "Despertarse", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/sunrise_1f305.png" },
      { texto: "Ir al baño", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/toilet_1f6bd.png" },
      { texto: "Cepillarse los dientes", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/toothbrush_1faa5.png" },
      { texto: "Lavarse la cara", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/droplet_1f4a7.png" },
      { texto: "Desayunar", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/bread_1f35e.png" },
      { texto: "Ponerse ropa", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/t-shirt_1f455.png" }
    ],
    "tarde/noche": [
      { texto: "Almorzar", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/poultry-leg_1f357.png" },
      { texto: "Descansar", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/person-in-bed_1f6cc.png" },
      { texto: "Jugar", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/video-game_1f3ae.png" },
      { texto: "Cenar", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/spaghetti_1f35d.png" },
      { texto: "Poner pijama", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/coat_1f9e5.png" },
      { texto: "Dormir", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/sleeping-face_1f634.png" }
    ],
    emociones: [
      { texto: "Estoy feliz", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/grinning-face_1f600.png" },
      { texto: "Estoy triste", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/crying-face_1f622.png" },
      { texto: "Estoy aburrido", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/neutral-face_1f610.png" },
      { texto: "Estoy ansioso", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/anxious-face-with-sweat_1f630.png" },
      { texto: "Estoy relajado", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/relieved-face_1f60c.png" },
      { texto: "Estoy emocionado", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/star-struck_1f929.png" },
      { texto: "Me siento solo", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/pleading-face_1f97a.png" },
      { texto: "Tengo miedo", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/fearful-face_1f628.png" }
    ],
    ubicacion: [
      { texto: "Arriba", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/up-arrow_2b06-fe0f.png" },
      { texto: "Abajo", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/down-arrow_2b07-fe0f.png" },
      { texto: "Al lado", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/right-arrow_27a1-fe0f.png" },
      { texto: "Dentro", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/package_1f4e6.png" }
    ],
    afirmaciones: [
      { texto: "Yo puedo", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/flexed-biceps_1f4aa.png" },
      { texto: "Soy capaz", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/star_2b50.png" },
      { texto: "Soy fuerte", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/flexed-biceps_1f4aa.png" },
      { texto: "Estoy aprendiendo", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/open-book_1f4d6.png" },
      { texto: "Estoy mejorando", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/chart-increasing_1f4c8.png" },
      { texto: "Me acepto como soy", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/smiling-face-with-hearts_1f970.png" },
      { texto: "Soy importante", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/exclamation-mark_2757.png" },
      { texto: "Soy valiente", imagen: "https://em-content.zobj.net/thumbs/120/apple/354/lion_1f981.png" }
    ]
  };

  // 🔁 PREGUNTAS RÁPIDAS MÁS COMPLEJAS
  const preguntas = [
    "¿Quieres ir al baño?",
    "¿Tienes hambre?",
    "¿Quieres escuchar música?",
    "¿Estás cansado?",
    "¿Necesitas ayuda para moverte?",
    "¿Quieres cambiar de ropa?",
    "¿Te gustaría salir al patio?",
    "¿Te duele algo?",
    "¿Te gustaría ver dibujos animados?",
    "¿Quieres descansar un momento?",
    "¿Quieres comunicarte con mamá o papá?",
    "¿Quieres jugar con bloques?",
    "¿Quieres hacer una actividad nueva?",
    "¿Estás cómodo donde estás sentado?",
    "¿Quieres una manta o cojín?"
  ];

  const reproducirVoz = (texto) => {
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'es-ES';
    window.speechSynthesis.speak(mensaje);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e6f7ff',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333'
    }}>
      {/* BARRA SUPERIOR */}
      <div style={{
        backgroundColor: '#cbe7f9',
        padding: '10px 20px',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '1.1rem',
        color: '#004466',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        🧠 Esta app apoya la comunicación de personas con trastorno neuromotor y brinda tranquilidad a sus familias.
      </div>

      {/* TÍTULO */}
      <h1 style={{
        textAlign: 'center',
        margin: '30px 10px 20px',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#fbb1a7',
        textShadow: '1px 1px 2px #ccc'
      }}>
        Mi Voz Cuenta
      </h1>

      {/* BOTONES DE CATEGORÍA */}
      <div style={{ marginBottom: 30, textAlign: 'center' }}>
        {Object.keys(pictogramasPorCategoria).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            style={{
              margin: '5px 10px',
              padding: '10px 15px',
              backgroundColor: categoria === cat ? '#a3d5f7' : '#f2f2f2',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '2px 2px 4px #ccc'
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
        {/* BOTÓN: GUÍA PARA FAMILIAS */}
        <button
          onClick={() => window.open("https://scandalous-sandpaper-67d.notion.site/Guia-y-recursos-para-familia-2285ca4273a980559687e6725d4c4f5e", '_blank')}
          style={{
            margin: '5px 10px',
            padding: '10px 15px',
            backgroundColor: '#ffdddd',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '2px 2px 4px #ccc'
          }}
        >
          Guía para Familias 👨‍👩‍👧‍👦
        </button>
      </div>

      {/* PREGUNTAS RÁPIDAS CON RESPUESTAS EN FILA */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h2 style={{ color: '#666' }}>Preguntas Rápidas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
          {preguntas.map((pregunta, index) => (
            <div key={index} style={{ minWidth: 220 }}>
              <button
                onClick={() => setPreguntaActiva(pregunta)}
                style={{
                  backgroundColor: '#fff4e6',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                {pregunta}
              </button>
              {preguntaActiva === pregunta && (
                <div style={{ marginTop: 8 }}>
                  <button
                    onClick={() => reproducirVoz('Sí')}
                    style={{ marginRight: 10, backgroundColor: '#d4f4dd', borderRadius: '8px', padding: '6px 15px' }}>✅ Sí</button>
                  <button
                    onClick={() => reproducirVoz('No')}
                    style={{ backgroundColor: '#f4d4d4', borderRadius: '8px', padding: '6px 15px' }}>❌ No</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MOSTRAR PICTOGRAMAS DE LA CATEGORÍA ACTUAL */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20
      }}>
        {pictogramasPorCategoria[categoria].map((picto, index) => (
          <Pictograma key={index} texto={picto.texto} imagen={picto.imagen} />
        ))}
      </div>
    </div>
  );
}

export default App;
