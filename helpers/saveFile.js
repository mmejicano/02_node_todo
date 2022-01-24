import fs from 'fs';
const archivo = './db/data.json';
export const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

export const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, 'utf-8'); // lee como string

  return JSON.parse(info); // convierte string a array
};
