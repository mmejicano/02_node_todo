import 'colors';
import { guardarDB } from './db/saveFile.js';
import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

const main = async () => {
  let opt = '';

  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opcion
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea(desc); // guarda en memoria un object
        break;
      case '2':
        console.log(tareas.listadoArr); // lista en array
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        break;
    }
    guardarDB(tareas.listadoArr); // guarda el array
    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();
