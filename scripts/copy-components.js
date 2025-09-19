import fs from "fs";
import path from "path";

const filesToCopy = [
  { from: "components/components", to: "dist/components", isDir: true },
  { from: "styles/vuetify-styles.css", to: "dist/styles/vuetify-styles.css", isDir: false },
  { from: "components/index.ts", to: "dist/index.ts", isDir: false },
];

for (const fileToCopy of filesToCopy) {
  const srcPath = path.resolve(fileToCopy.from);
  const destPath = path.resolve(fileToCopy.to);

  if (fileToCopy.isDir) {
    fs.mkdirSync(destPath, { recursive: true });

    fs.readdirSync(srcPath).forEach(file => {
      const fileSrc = path.join(srcPath, file);
      const fileDest = path.join(destPath, file);

      const stat = fs.statSync(fileSrc);

      if (stat.isDirectory()) {
        // Copiar carpeta recursivamente
        fs.cpSync(fileSrc, fileDest, { recursive: true });
        console.log(`Copied folder ${file}`);
      } else {
        // Copiar archivo normal
        fs.copyFileSync(fileSrc, fileDest);
        console.log(`Copied file ${file}`);
      }
    });
  } else {
    // Archivo individual
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied file ${path.basename(destPath)}`);
  }
}
