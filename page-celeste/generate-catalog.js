#!/usr/bin/env node

/**
 * SCRIPT PARA GENERAR CATÁLOGO AUTOMÁTICAMENTE
 * 
 * USO:
 * node generate-catalog.js
 * 
 * Esto busca AUTOMÁTICAMENTE todas las carpetas dentro de imagenes/
 * y crea categorías dinámicamente sin necesidad de definirlas.
 * 
 * Ejemplo:
 * imagenes/
 *   ├── maquillaje/ → Categoría "Maquillaje"
 *   ├── cuidado/ → Categoría "Cuidado"
 *   ├── mi-nueva-categoria/ → Categoría "Mi Nueva Categoría"
 *   └── accesorios/ → Categoría "Accesorios"
 */

const fs = require('fs');
const path = require('path');

// Extensiones de imagen permitidas
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function capitalizeWords(string) {
  return string
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function removeExtension(filename) {
  return path.parse(filename).name;
}

function getImageFiles(directory) {
  try {
    const files = fs.readdirSync(directory);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    }).sort();
  } catch (error) {
    return [];
  }
}

function getDirectories(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    return items.filter(item => {
      const fullPath = path.join(dirPath, item);
      return fs.statSync(fullPath).isDirectory();
    }).sort();
  } catch (error) {
    return [];
  }
}

function generateCatalog() {
  const imagenesPath = path.join(__dirname, 'imagenes');

  // Verificar si la carpeta imagenes existe
  if (!fs.existsSync(imagenesPath)) {
    console.log('❌ Error: No existe la carpeta "imagenes/"\n');
    console.log('Crea la estructura así:\n');
    console.log('imagenes/');
    console.log('├── maquillaje/');
    console.log('│   ├── foto1.jpg');
    console.log('│   └── foto2.jpg');
    console.log('├── cuidado/');
    console.log('│   └── crema.jpg');
    console.log('└── tu-categoria/');
    console.log('    └── producto.jpg\n');
    process.exit(1);
  }

  console.log('🔍 Buscando carpetas de categorías...\n');

  const catalog = {
    categories: [],
    products: []
  };

  let productId = 1;

  // Obtener todas las carpetas dentro de imagenes/
  const directories = getDirectories(imagenesPath);

  if (directories.length === 0) {
    console.log('⚠️  No hay carpetas dentro de imagenes/\n');
    console.log('Crea al menos una carpeta como esta:');
    console.log('imagenes/maquillaje/\n');
    process.exit(1);
  }

  console.log(`📁 Se encontraron ${directories.length} categoría(s):\n`);

  // Procesar cada carpeta como categoría
  directories.forEach(folderName => {
    const categoryPath = path.join(imagenesPath, folderName);
    const categoryId = folderName.toLowerCase();
    const categoryName = capitalizeWords(folderName);

    const imageFiles = getImageFiles(categoryPath);

    if (imageFiles.length === 0) {
      console.log(`⚠️  Vacía: imagenes/${folderName}/ (se ignora)`);
      return;
    }

    // Agregar categoría
    catalog.categories.push({
      id: categoryId,
      name: categoryName
    });

    console.log(`✅ ${categoryName}:`);

    // Procesar cada imagen
    imageFiles.forEach(imageFile => {
      const fileNameWithoutExt = removeExtension(imageFile);
      
      // Generar título a partir del nombre del archivo
      const title = capitalizeWords(fileNameWithoutExt);

      const product = {
        id: productId,
        categoryId: categoryId,
        title: title,
        description: 'Producto premium de CR Sublimaciones',
        image: `./imagenes/${categoryId}/${imageFile}`
      };

      catalog.products.push(product);

      console.log(`   📷 ${imageFile} → "${title}"`);

      productId++;
    });

    console.log('');
  });

  // Guardar JSON
  const jsonPath = path.join(__dirname, 'catalog.json');
  fs.writeFileSync(jsonPath, JSON.stringify(catalog, null, 2));

  console.log(`✨ ¡HECHO!\n`);
  console.log(`📊 Resumen:`);
  console.log(`   • Categorías detectadas: ${catalog.categories.length}`);
  console.log(`   • Productos encontrados: ${catalog.products.length}`);
  console.log(`   • Archivo generado: catalog.json`);
  console.log(`   • Cambios guardados\n`);

  // Mostrar categorías detectadas
  if (catalog.categories.length > 0) {
    console.log(`📚 Categorías detectadas:`);
    catalog.categories.forEach(cat => {
      const count = catalog.products.filter(p => p.categoryId === cat.id).length;
      console.log(`   • ${cat.name} (${count} producto${count !== 1 ? 's' : ''})`);
    });
  }

  console.log(`\n🚀 Ahora abre index-nuevo.html en tu navegador\n`);
}

// Ejecutar
generateCatalog();
