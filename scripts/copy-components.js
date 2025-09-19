import fs from "fs";
import path from "path";
const filesToCopy = [
  {from: "src/components", to: "dist/components", isDir: true},
  {from: "src/index.ts", to: "dist/index.js", isDir: false},
]

for (const fileToCopy of filesToCopy) {
  const srcPath = path.resolve(fileToCopy.from);
  const destPath = path.resolve(fileToCopy.to);

  if (fileToCopy.isDir) {
    fs.mkdirSync(destPath, { recursive: true });
    fs.readdirSync(srcPath).forEach(file => {
      const fileSrc = path.join(srcPath, file);
      const fileDest = path.join(destPath, file);
      fs.copyFileSync(fileSrc, fileDest);
      console.log(`Copied ${file}`);
    });
  } else {
    // Archivo individual
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${path.basename(destPath)}`);
  }
}
