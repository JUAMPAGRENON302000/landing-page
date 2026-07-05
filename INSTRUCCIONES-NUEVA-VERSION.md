# 🚀 VERSIÓN MEJORADA - Catálogo Automático

## ✨ NOVEDADES

✅ **Carga automática de imágenes** - No necesitas nombres específicos  
✅ **Modal para ver en grande** - Haz clic en cualquier imagen  
✅ **Generador automático con Node.js** - Un comando y ¡listo!  
✅ **Funciona en Netlify/Vercel** - Sin problemas  

---

## 📋 REQUISITOS

1. **Node.js instalado** (descarga de nodejs.org)
   - Verifica con: `node --version`

2. **Archivos del proyecto** descargados

---

## 🎯 PASOS PARA USAR (MUY FÁCIL)

### PASO 1: Organiza tus imágenes

Crea esta estructura:

```
mi-tienda/
├── index-nuevo.html          ← Este archivo
├── generate-catalog.js       ← Script Node.js
└── imagenes/
    ├── maquillaje/           ← Tus fotos aquí (nombres cualquiera)
    │   ├── foto1.jpg
    │   ├── foto2.jpg
    │   └── foto3.jpg
    │
    ├── cuidado/              ← Tus fotos aquí
    │   ├── crema.jpg
    │   └── locion.jpg
    │
    ├── fragancias/           ← Tus fotos aquí
    │   └── perfume.jpg
    │
    └── cuerpo/               ← Tus fotos aquí
        └── gel.jpg
```

**⚠️ IMPORTANTE:**
- Las carpetas DEBEN tener esos nombres (minúsculas, sin espacios)
- Las imágenes pueden tener cualquier nombre
- Solo necesitas: .jpg, .png, .gif o .webp

### PASO 2: Ejecuta el generador

Abre una terminal/CMD en tu carpeta del proyecto y ejecuta:

```bash
node generate-catalog.js
```

**Qué hace:**
- Lee TODAS las imágenes de cada carpeta
- Genera automáticamente `catalog.json`
- Te muestra un resumen

Output esperado:
```
🔍 Buscando imágenes...

✅ Maquillaje:
   📷 foto1.jpg → "Foto1"
   📷 foto2.jpg → "Foto2"

✅ Cuidado de Piel:
   📷 crema.jpg → "Crema"

✨ ¡HECHO!

📊 Resumen:
   • Categorías: 4
   • Productos: 7
   • Archivo guardado: catalog.json
```

### PASO 3: Abre tu página

1. Haz doble clic en `index-nuevo.html`
2. Se abre en tu navegador
3. **¡Listo! Todas las imágenes se mostrarán automáticamente**

### PASO 4: Personalizar (Opcional)

Abre `index-nuevo.html` y busca:

```javascript
const whatsappNumber = '5493426392202';  // Tu número
const companyName = 'Productos CR Sublimaciones';  // Tu empresa
```

Reemplaza con tus datos.

---

## 🖼️ CÓMO FUNCIONA EL MODAL

1. **Ver imagen normal:** Click en la imagen en la tarjeta
2. **Ver imagen grande:** Se abre un modal con:
   - Imagen grande
   - Título
   - Descripción
   - Botón de WhatsApp
   - Botón de cerrar

3. **Cerrar modal:** 
   - Click en el ✕
   - Click en fondo oscuro
   - Botón "Cerrar"

---

## 🎨 PERSONALIZAR DESCRIPCIONES

Las descripciones se generan automáticamente como "Producto premium de Avon"

Para cambiar, edita `catalog.json`:

```json
{
  "id": 1,
  "categoryId": "maquillaje",
  "title": "Foto1",
  "description": "**AQUÍ ESCRIBE TU DESCRIPCIÓN PERSONALIZADA**",
  "image": "./imagenes/maquillaje/foto1.jpg"
}
```

Luego recarga la página (Ctrl+F5).

---

## 🔄 AGREGAR MÁS IMÁGENES

1. Agrega las fotos a la carpeta correspondiente
2. Ejecuta nuevamente: `node generate-catalog.js`
3. Recarga la página

¡Eso es todo! El catálogo se actualiza automáticamente.

---

## 📤 PUBLICAR EN NETLIFY/VERCEL

### Opción A: Netlify Drop (MÁS FÁCIL)

1. Ve a https://netlify.com/drop
2. Selecciona tu carpeta de proyecto
3. ¡Publicado automáticamente!

### Opción B: Vercel

1. Ve a https://vercel.com
2. Sube tu proyecto
3. ¡Se publica automáticamente!

### Opción C: GitHub + Vercel/Netlify

1. Sube a GitHub
2. Conecta Vercel/Netlify a GitHub
3. Publica automáticamente

---

## 🐛 TROUBLESHOOTING

### "node: command not found"
**Solución:** Node.js no está instalado. Descarga de nodejs.org

### "Cannot find module 'fs'"
**Solución:** Asegúrate de ejecutar desde la carpeta correcta

### Las imágenes no aparecen
1. Verifica que exista `catalog.json`
2. Presiona Ctrl+F5 en navegador
3. Revisa que las imágenes estén en las carpetas correctas

### Recarga de imágenes desde terminal
```bash
rm catalog.json
node generate-catalog.js
```

### El modal no abre
Intenta:
1. Presiona F12 (Developer Tools)
2. Ve a Console
3. Busca errores
4. Refresca con Ctrl+F5

---

## 📊 STRUCTURE DEL CATALOG.JSON GENERADO

```json
{
  "categories": [
    {
      "id": "maquillaje",
      "name": "Maquillaje"
    }
  ],
  "products": [
    {
      "id": 1,
      "categoryId": "maquillaje",
      "title": "Tu Imagen",
      "description": "Producto premium de Avon",
      "image": "./imagenes/maquillaje/foto.jpg"
    }
  ]
}
```

---

## 💡 RECOMENDACIONES

### Para Descripções mejores:
Edita `catalog.json` y personaliza cada producto:
```json
"description": "Base líquida con cobertura total y acabado mate duradero"
```

### Para Imágenes de mejor calidad:
- Tamaño: 500x500 px mínimo
- Peso: 200-500 KB
- Formato: .jpg (para fotos realistas)
- Comprime en: tinypng.com

### Para nombres automáticos:
El script convierte nombres así:
- `base-liquida.jpg` → "Base Liquida"
- `perfume_floral.jpg` → "Perfume Floral"
- `produto1.jpg` → "Produto1"

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Ejecutaste `node generate-catalog.js`
- [ ] Se creó el archivo `catalog.json`
- [ ] Las imágenes aparecen al abrir `index-nuevo.html`
- [ ] El modal abre al hacer click
- [ ] Cambió el número de WhatsApp
- [ ] Cambió el nombre de la empresa

---

## 🚀 ¡LISTO!

Tu tienda está lista para:
- ✅ Agregar/quitar imágenes fácilmente
- ✅ Mostrar modal con imagen grande
- ✅ Funcionar en navegador sin servidor
- ✅ Publicarse en Netlify/Vercel sin problemas

¿Preguntas? Revisa los logs del script o consola del navegador.

¡Éxito! 🎉
