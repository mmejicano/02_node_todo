import { Tarea } from './tarea.js';
import 'colors';
export class Tareas {
  _listado = {}; // para acceder a _listado[123]

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado; // convierte object _listado to array
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray = (tareas = []) => {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  };

  listadoCompleto() {
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendienteCompletas(completadas = true) {
    let idx = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red;

      if (completadas) {
        if (completadoEn) {
          idx += 1;
          console.log(`${idx.toString().green}. ${desc} :: ${estado}`);
        }
      } else {
        if (!completadoEn) {
          idx += 1;
          console.log(`${idx.toString().green}. ${desc} :: ${estado}`);
        }
      }
    });
  }
}
