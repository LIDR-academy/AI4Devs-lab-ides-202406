# Sin semilla

## Observaciones

### IDE + Plugin: Cursor - CodeGPT

```
* Tecnologías usadas
    * TypeScript
    * NextJS
    * REACT 
    * Node
    * Express
    * Prisma
    * PostgresSQL
    * Tailwind
* Qué partes han dado más problemas a la hora de implementar
    * Entrega mucha información de forma dispersa entonces a uno le toca armar cada pieza en su parte.
    * Al usar otro asistente como CodeGPT no permite enviar directamente la opción a la terminal como lo hace Copilot
* Cómo las has resuelto
    * Hay que tener cierta experiencia para armar cada pieza y organizarla.
    * CodeGPT con la version de prueba ha realizado parte del trabajo que el tutor hizo a mano.
    * Genero un formateado de estilo de código algo que no pedí pero me parece un plus.
```

# Con semilla

## Observaciones

### IDE - Plugin: Cursor - GPT-4o

# Prompt 0

Hola actualmente voy a iniciar con la construcción de un proyecto de Sistema de Seguimiento de Talento (ATS) llamado "LTI". Ya tiene una semilla que es el código base ya está creado tiene una carpeta BackEnd y tiene una carpeta FrontEnd. El proyecto está desarrollado completamente usando TypeScript y NextJS, con un FrontEnd usando REACT y un BackEnd que nos generará las APIs necesarias, utilizaremos Node, Express, y utilizaremos PostgresSQL como base de datos y prisma como ORM, además para el manejo de estilos css con Tailwind. Seguimos los principios de Diseño Dirigido por Dominio (DDD), Desarrollo Dirigido por Pruebas (TDD). No generes código aún solo para ponerte en contexto.

# Prompt 1

Esta historia de usuario requiero desarrollarla, aún no respondas con código solo para que lo tengas presente en el contexto.

## Historia de usuario:

### Añadir Candidato al Sistema

**Como** reclutador, **Quiero** tener la capacidad de añadir candidatos al sistema ATS, **Para que** pueda gestionar sus datos y procesos de selección de manera eficiente.

### Criterios de Aceptación:

- **Accesibilidad de la función:** Debe haber un botón o enlace claramente visible para añadir un nuevo candidato desde la página principal del dashboard del reclutador.
- **Formulario de ingreso de datos:** Al seleccionar la opción de añadir candidato, se debe presentar un formulario que incluya los campos necesarios para capturar la información del candidato como nombre, apellido, correo electrónico, teléfono, dirección, educación y experiencia laboral.
- **Validación de datos:** El formulario debe validar los datos ingresados para asegurar que son completos y correctos. Por ejemplo, el correo electrónico debe tener un formato válido y los campos obligatorios no deben estar vacíos.
- **Carga de documentos:** El reclutador debe tener la opción de cargar el CV del candidato en formato PDF o DOCX.
- **Confirmación de añadido:** Una vez completado el formulario y enviada la información, debe aparecer un mensaje de confirmación indicando que el candidato ha sido añadido exitosamente al sistema.
- **Errores y manejo de excepciones:** En caso de error (por ejemplo, fallo en la conexión con el servidor), el sistema debe mostrar un mensaje adecuado al usuario para informarle del problema.
- **Accesibilidad y compatibilidad:** La funcionalidad debe ser accesible y compatible con diferentes dispositivos y navegadores web.

### Notas:

- La interfaz debe ser intuitiva y fácil de usar para minimizar el tiempo de entrenamiento necesario para los nuevos reclutadores.
- Considerar la posibilidad de integrar funcionalidades de autocompletado para los campos de educación y experiencia laboral, basados en datos preexistentes en el sistema.

# Prompt 2

Estas son las tareas que requiero, aún no ejecutes código solo para poner en contexto.

## Tareas Técnicas:

- Implementar la interfaz de usuario para el formulario de añadir candidato.
- Desarrollar el backend necesario para procesar la información ingresada en el formulario.
- Asegurar la seguridad y privacidad de los datos del candidato.

Como ves, hay 3 tareas técnicas necesarias: desarrollar el backend, el frontend y la base de datos. Dado que no hay nada aún en el proyecto base, requerirá tareas extra como crear el modelo de datos, lanzar la migración en PostgreSQL, etc.