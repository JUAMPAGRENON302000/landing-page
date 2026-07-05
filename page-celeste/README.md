# 🛍️ Landing Page Productos CR Sublimaciones

Tu tienda online lista para usar.

## 📁 ESTRUCTURA DE CARPETAS (Crear así)

```
mi-tienda/
│
├── index.html                  (este archivo)
│
└── imagenes/
    ├── maquillaje/
    │   ├── base.jpg
    │   ├── labial.jpg
    │   ├── sombras.jpg
    │   └── rimel.jpg
    │
    ├── cuidado/
    │   ├── crema.jpg
    │   ├── limpiador.jpg
    │   ├── serum.jpg
    │   └── mascarilla.jpg
    │
    ├── fragancias/
    │   ├── perfume-floral.jpg
    │   ├── colonia.jpg
    │   └── perfume-maderas.jpg
    │
    └── cuerpo/
        ├── locion.jpg
        └── gel.jpg
```

## ⚙️ PASOS PARA CONFIGURAR

### 1. **Cambiar número de WhatsApp**
Abre `index.html` con un editor de texto (Bloc de notas, VS Code, etc.)

Busca esta línea (está alrededor de la línea 69):
```javascript
const whatsappNumber = '5493426392202'; // Tu número de WhatsApp
```

Reemplaza `5491234567890` con tu número:
- Incluye código de país (ej: 54 para Argentina)
- SIN símbolos + ni espacios
- Ejemplo: `5491234567890` o `541234567890`

### 2. **Crear carpetas de imágenes**
Crea esta estructura exactamente:
```
imagenes/
├── maquillaje/
├── cuidado/
├── fragancias/
└── cuerpo/
```

### 3. **Agregar tus imágenes**
- Pon las fotos en la carpeta correspondiente
- Los nombres deben COINCIDIR exactamente con los del código:
  - `maquillaje/base.jpg`
  - `maquillaje/labial.jpg`
  - etc.

⚠️ **Los nombres son sensibles a mayúsculas**: `Base.jpg` NO es lo mismo que `base.jpg`

### 4. **Editar productos**
Si quieres cambiar nombres, descripción o agregar productos, abre `index.html` y busca:

```javascript
const products = {
    maquillaje: [
        {
            id: 1,
            title: 'Base de Maquillaje',
            description: 'Base líquida con cobertura total y acabado mate duradero',
            image: './imagenes/maquillaje/base.jpg'
        },
        // ... más productos
    ],
```

Puedes editar directamente ahí.

## 🚀 CÓMO VER TU PÁGINA

### Opción 1: Abrir directamente (Más fácil)
1. Descarga los archivos
2. Crea la carpeta `imagenes` como se indica arriba
3. Agrega tus imágenes
4. **Haz doble clic en `index.html`** ← Así se abre en tu navegador

### Opción 2: Servidor local (Si no funciona la opción 1)
En Windows:
- Ve a la carpeta donde está `index.html`
- Haz clic en la barra de direcciones
- Escribe: `cmd`
- Se abre una ventana negra
- Escribe: `python -m http.server 8000`
- Abre tu navegador en: `http://localhost:8000`

## 📤 PUBLICAR EN INTERNET (GRATIS)

### Con Vercel (Recomendado - muy fácil)
1. Ve a https://vercel.com
2. Clic en "Sign up" 
3. Crea cuenta con GitHub / Email
4. Sube tu carpeta del proyecto
5. ¡Listo! Te da una URL gratis

### Con Netlify
1. Ve a https://netlify.com
2. Arrastra tu carpeta del proyecto
3. ¡Publicado al instante!

### Con GitHub Pages
1. Sube a GitHub
2. Ve a Settings → Pages
3. Activa GitHub Pages
4. Tu página estará en: `https://tuusuario.github.io/mi-tienda`

## ✏️ PERSONALIZACIÓN

### Cambiar colores
Busca en el código `#d4347a` y `#922d5a` - esos son los colores del header (rosa)
- `#d4347a` = Rosa fuerte
- `#922d5a` = Rosa oscuro

Usa sites como colorhexa.com para encontrar otros colores.

### Cambiar nombre de la tienda
Busca `<h1>Productos CR Sublimaciones</h1>` y cámbialo

### Agregar categoría nueva
1. En la sección `categories`, añade:
```javascript
{ id: 'accesorios', name: 'Accesorios' }
```

2. En `products`, añade:
```javascript
accesorios: [
    {
        id: 15,
        title: 'Tu Producto',
        description: 'Descripción',
        image: './imagenes/accesorios/producto.jpg'
    }
]
```

3. Crea carpeta `imagenes/accesorios/` y agrega las fotos

## 📱 RESPONSIVE
La página funciona perfectamente en celular, tablet y desktop. ¡Sin hacer nada especial!

## ❓ PROBLEMAS COMUNES

**P: Las imágenes no aparecen**
R: Revisa que:
- El nombre del archivo sea exactamente igual (mayúsculas, extensión)
- La carpeta esté en la ubicación correcta
- La extensión sea .jpg o .png (no .jpeg)

**P: No funciona el botón de WhatsApp**
R: Revisa que el número esté correcto sin símbolos

**P: Cambié algo y no se ve**
R: Presiona Ctrl+F5 para limpiar caché del navegador

**P: ¿Puedo editar los textos de los productos?**
R: Sí, busca en el código `const products` y edita directamente

## 📞 SOPORTE
Si tienes dudas, revisa:
- Los comentarios en el código HTML
- Busca la línea que dice "EDITA AQUÍ"

¡Tu tienda está lista! 🎉
