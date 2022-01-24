import 'colors';
import inquirer from 'inquirer';

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [
      { value: '1', name: '1. Crear tarea' },
      { value: '2', name: '2. Listar tareas' },
      { value: '3', name: '3. Listar tareas completadas' },
      { value: '4', name: '4. Listar tareas pendientes' },
      { value: '5', name: '5. Completar tareas ' },
      { value: '6', name: '6. Borrar tareas' },
      { value: '0', name: '0. Salir' },
    ],
  },
];

export const inquirerMenu = async () => {
  //console.clear();
  console.log('==============='.green);
  console.log('Seleccione una opcion'.white);
  console.log('==============='.green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

export const pausa = async () => {
  const pregunta = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.blue} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(pregunta);
};

export const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

export const listadoTareaBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = i + 1;
    return {
      value: tarea.id,
      name: `${idx}. ${tarea.desc}`,
    };
  });

  choices.unshift({ value: '0', name: '0. Cancelar' });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

export const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

export const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = i + 1;
    return {
      value: tarea.id,
      name: `${idx}. ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Tareas seleccionadas:',
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(pregunta);
  return ids;
};
