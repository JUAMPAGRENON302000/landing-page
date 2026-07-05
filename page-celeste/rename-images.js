#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

const imagenesPath = path.join(__dirname, "imagenes");

if (!fs.existsSync(imagenesPath)) {
    console.log('❌ No existe la carpeta "imagenes"');
    process.exit(1);
}

const folders = fs.readdirSync(imagenesPath).filter(item => {
    const fullPath = path.join(imagenesPath, item);
    return fs.statSync(fullPath).isDirectory();
});

folders.forEach(folder => {
    const folderPath = path.join(imagenesPath, folder);

    const files = fs.readdirSync(folderPath)
        .filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
        .sort();

    if (files.length === 0) return;

    console.log(`\n📁 ${folder}`);

    // Paso 1: nombres temporales para evitar conflictos
    files.forEach((file, index) => {
        const ext = path.extname(file);
        const tempName = `__temp__${index}${ext}`;

        fs.renameSync(
            path.join(folderPath, file),
            path.join(folderPath, tempName)
        );
    });

    // Paso 2: nombres definitivos
    const tempFiles = fs.readdirSync(folderPath)
        .filter(file => file.startsWith("__temp__"))
        .sort();

    tempFiles.forEach((file, index) => {
        const ext = path.extname(file);
        const newName = `${folder}-${index + 1}${ext}`;

        fs.renameSync(
            path.join(folderPath, file),
            path.join(folderPath, newName)
        );

        console.log(`   ✅ ${newName}`);
    });
});

console.log("\n✨ Renombrado completado");