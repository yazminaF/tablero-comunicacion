# YAMI INVESTIGACION

https://drive.google.com/file/d/1VKDdgEIfPwYVnwmORjX12HQfimdgIKbJ/view?usp=sharing

https://drive.google.com/file/d/1Y6Wivbg9JRmnW6WlYtCcNl9miBHD-pwK/view?usp=sharing

ESTA APP ESTA INSPIRADA EN LA VOCACION DE MI MAMA 

ANA ALEJANDRA GUACUCANO FARIAS QUE DESDE  1990 , CUANDO LAS  DEFICIENCIAS ERAN TABOO Y NO HABIAN HERRAMIENTAS , NI SUFICIENTE EDUCACION NI INCLUCION ELLA CREYO EN UNA MEJOR FORMA DE VIVIR PARA OTROS COMO HOY EN EL 2025

# Documentación del Proyecto "Mi Voz Cuenta"

## 1. Nombre del Proyecto

**Mi Voz Cuenta**

Una aplicación web de comunicación aumentativa y alternativa (CAA) pensada para personas con **trastorno neuromotor** y sus familias.

---

## 2. Propósito del Proyecto

Brindar una herramienta visual, accesible y amigable que permita a los usuarios con dificultades del habla expresar sus necesidades, emociones y deseos mediante pictogramas y frases de uso común.

---

## 3. Público Objetivo

- Personas con trastorno neuromotor (ej. parálisis cerebral)
- Padres, madres y cuidadores
- Terapeutas del lenguaje y profesionales de la salud

---

## 4. Tecnologías Utilizadas

- **React**: librería de JavaScript para construir interfaces de usuario.
- **Vite**: herramienta de desarrollo para React que permite cargar rápido el proyecto.
- **HTML5 y CSS3**: para estructura y estilos.
- **SpeechSynthesis API**: permite leer en voz alta las frases seleccionadas.
- **Netlify**: servicio de despliegue gratuito para publicar la aplicación en línea.

---

## 5. Estructura del Proyecto

```
tablero-comunicacion/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── Pictograma.jsx
├── package.json
├── vite.config.js
├── dist/ (se genera luego de build)
```

---

## 6. Componentes Clave

### `App.jsx`

- ManejE el estado y las categorías.
- Muestra los pictogramas por categorías: mañana, tarde/noche, emociones, ubicación, afirmaciones.
- Incluye preguntas rápidas y reproducción de voz.

### `Pictograma.jsx`

- Componente que recibe `texto` e `imagen` como props.
- Al hacer clic, reproduce el texto en voz alta.

---

## 7. Funcionalidades Principales

- **Categorías** (mañana, tarde/noche, emociones, etc.)
- **Reproducción de voz** con `SpeechSynthesisUtterance`
- **Preguntas rápidas** como: ¿Tienes hambre?, ¿Necesitas ayuda?
- **Frases de amor propio** como "Yo puedo", "Soy capaz", "Me acepto como soy"
- **Diseño amigable** con colores pasteles

---

## 8. Mejore Prácticas Aplicadas

- Separación de componentes en React
- Uso de `map()` para renderizar listas dinámicamente
- Estilos suaves para accesibilidad visual
- Uso de emojis comprensibles como imágenes externas (via links)
- Inclusión de una sección educativa para padres

---

## 9. Cambios y Mejoras Realizadas

- Se añadió nueva categoría: **afirmaciones positivas**.
- Se reorganizó visualmente para mostrar preguntas al costado.
- Se corrigieron imágenes que no cargaban (como "descansar" o "poner pijama").
- Se implementó un diseño con colores pasteles y tipografía clara.
- Se agregaron más emociones y conjugaciones verbales.
- Se añadió sección informativa para padres.

---

## 10. Despliegue

- Se ejecutó `npm run build` para generar la carpeta `dist/`
- Se subió manualmente el contenido de `dist/` a [Netlify](https://netlify.com/)
- La aplicación quedó publicada y accesible desde cualquier navegador.

---

## 11. Próximas Mejoras (YAMI)

- Permitir grabar audios con la voz del usuario
- Agregar más categorías personalizadas
- Modo oscuro para comodidad visual
- Registro de frases favoritas o más usadas
- Base de datos para guardar configuraciones por usuario

**Proyecto creado por Yazmina con fines educativos y sociales 💜**

---

ERRORES QUE TUVE, QUE OCUPE ETC

http://localhost:5173/

![image.png](attachment:42c2cb7d-5170-400e-a43a-35cce28bb613:image.png)

![image.png](attachment:7931e006-1261-4951-b846-0b6db5c2239e:image.png)

![image.png](attachment:274eb6b7-ea75-441e-a7c1-e7f9833809f8:image.png)

![image.png](attachment:73f4095b-901c-42f0-88d3-0f762284cd84:image.png)

![image.png](attachment:91d34012-8fec-4f61-8a32-731ec755bc32:image.png)

MI PRIMER CODIGO  DE LA IDEA EN `App.jsx`

import React from 'react';
import './App.css';
import Pictograma from './Pictograma';

function App() {
return (
<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
<Pictograma
texto="Tengo hambre"
imagen="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
/>
<Pictograma
texto="Quiero ir al baño"
imagen="https://cdn-icons-png.flaticon.com/512/869/869636.png"
/>
<Pictograma
texto="Quiero jugar"
imagen="https://cdn-icons-png.flaticon.com/512/2784/2784462.png"
/>
</div>
);
}

export default App;

**QUE HICE** 

INSTALE NODE JS 

LUEGO CREE CON Vite y React 

`vite` es una herramienta moderna para crear apps React con carga muy rápida 
USE ESTE COMANDO EN LA TERMINAL DE VS Y NO ME FUNCIONO

npm create vite@latest tablero-comunicacion -- --template react

ENTONCES LO HICE CON CMD 

Y AHII FUNCIONO E  INSTALE LAS dependencias 

cd tablero-comunicacion
npm install
npm run dev

Y CREE EL. COMPONENTE 
el componente `Pictograma.jsx` DENTRO DE SRC

import React from 'react';

function Pictograma({ texto, imagen }) {
const hablar = () => {
const mensaje = new SpeechSynthesisUtterance(texto);
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
📌 ¿Por qué?
Creo un componente reutilizable que muestra una imagen con un texto.

Al hacer clic, ejecuta la función hablar() que usa la API del navegador SpeechSynthesisUtterance para leer el texto en voz alta.

Usamos props (texto e imagen) para que el componente sea flexible y muestre diferentes pictogramas.

![image.png](attachment:87c4fd0f-e088-42d8-8374-057c02e9db7d:image.png)
