import { spawn } from "child_process";
import open from "open";
import dotenv from "dotenv";

// Cargar variables del .env
dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST

const commands = ["nuxt", "dev"];
if(host){
  commands.push(`--host=${host}`)
}

// Inicia Nuxt
const nuxt = spawn("npx", commands, { stdio: "inherit" });

// Abre el navegador después de unos segundos
setTimeout(() => {
  open(`http://localhost:${port}`);
}, 1);