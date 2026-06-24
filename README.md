# Conecta Digital — Sitio Web Oficial

Agencia digital en Guatemala. Tema claro premium con paleta **azul + gris + naranja + cyan**.
Tipografías Orbitron + Exo 2.

## ✨ Características

- **Hero** con partículas conectadas animadas, logo flotante con órbitas y botón naranja de acción
- **Stats** con contraste claro/oscuro y cifras animadas
- **Demo en vivo:** navegador donde el código se escribe solo y la página se construye en pantalla (loop)
- **Sección estrella "Un diseño para cada tipo de negocio":** carrusel con imagen real difuminada + acento de color por nicho + tarjeta flotante con beneficios y botón de WhatsApp. Pestañas para elegir nicho (Restaurante, Clínica, Tienda/Moda, Gimnasio, Hotel, Barbería)
- **Proceso de trabajo** en 4 pasos (genera confianza antes de contratar)
- **Inspiración de diseño** de clase mundial
- **Preguntas frecuentes** (FAQ) que resuelven dudas de compra
- Barra de progreso de scroll + botón "volver arriba"
- Marquee de servicios, reveals al scroll, WhatsApp flotante con pulso
- **SEO + AEO + GEO completo:**
  - SEO: meta tags, Open Graph, keywords, sitemap, robots.txt
  - AEO (Answer Engine Optimization): FAQPage estructurado para que ChatGPT, Gemini y Google respondan con tu info
  - GEO (Generative Engine Optimization): Schema.org enriquecido con servicios y datos del negocio; robots.txt permite bots de IA (GPTBot, Google-Extended, PerplexityBot, ClaudeBot)
- Responsive + accesible (`prefers-reduced-motion`, focus visible)

## 🎨 Paleta

| Uso | Color |
|---|---|
| Azul corporativo | `#0d2240` / `#1450c8` |
| Gris (texto secundario) | `#5a6b80` |
| **Naranja (acción/CTA)** | `#ff6a2b` |
| Cyan (acento/logo) | `#00b8e6` |

El naranja se usa solo en botones y llamadas a la acción.

## 📁 Estructura

```
conecta-digital/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/ (logo-blue, logo-white, niche-*.jpg)
├── .htaccess
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🚀 Publicar en GitHub Pages

```bash
cd conecta-digital
git init
git add .
git commit -m "Sitio Conecta Digital v3 - paleta azul/naranja"
git branch -M main
git remote add origin https://github.com/Alben0188/conecta-digital.git
git push -u origin main
```

Luego: **Settings → Pages → Deploy from branch → main / root**.
Queda en `https://alben0188.github.io/conecta-digital/`

## 🌐 Publicar en Hostinger

Subir todo a `public_html/` por File Manager o FTP. El `.htaccess` activa HTTPS, cache y compresión.
Reemplazar la URL de GitHub por el dominio real en `index.html`, `sitemap.xml` y `robots.txt`.

## 🖼️ Imágenes de los nichos

La sección de diseños usa **fotos reales** (`photo-*.jpg`) de cada tipo de negocio, descargadas de
Unsplash (libres de uso). Si querés cambiarlas por otras, reemplazá el archivo manteniendo el mismo
nombre: `photo-resto.jpg`, `photo-clinic.jpg`, `photo-shop.jpg`, `photo-gym.jpg`, `photo-hotel.jpg`,
`photo-barber.jpg`.
