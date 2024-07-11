# Primer prompt
Hi, as an expert Node and React developer, I want you to implement this new user story:

Añadir Candidato al Sistema
Como reclutador,
Quiero tener la capacidad de añadir candidatos al sistema ATS,
Para que pueda gestionar sus datos y procesos de selección de manera eficiente.

Criterios de Aceptación:

Accesibilidad de la función: Debe haber un botón o enlace claramente visible para añadir un nuevo candidato desde la página principal del dashboard del reclutador.
Formulario de ingreso de datos: Al seleccionar la opción de añadir candidato, se debe presentar un formulario que incluya los campos necesarios para capturar la información del candidato como nombre, apellido, correo electrónico, teléfono, dirección, educación y experiencia laboral.
Validación de datos: El formulario debe validar los datos ingresados para asegurar que son completos y correctos. Por ejemplo, el correo electrónico debe tener un formato válido y los campos obligatorios no deben estar vacíos.
Carga de documentos: El reclutador debe tener la opción de cargar el CV del candidato en formato PDF o DOCX.
Confirmación de añadido: Una vez completado el formulario y enviada la información, debe aparecer un mensaje de confirmación indicando que el candidato ha sido añadido exitosamente al sistema.
Errores y manejo de excepciones: En caso de error (por ejemplo, fallo en la conexión con el servidor), el sistema debe mostrar un mensaje adecuado al usuario para informarle del problema.
Accesibilidad y compatibilidad: La funcionalidad debe ser accesible y compatible con diferentes dispositivos y navegadores web.
Notas:

La interfaz debe ser intuitiva y fácil de usar para minimizar el tiempo de entrenamiento necesario para los nuevos reclutadores.
Considerar la posibilidad de integrar funcionalidades de autocompletado para los campos de educación y experiencia laboral, basados en datos preexistentes en el sistema.
Tareas Técnicas:

Implementar la interfaz de usuario para el formulario de añadir candidato.
Desarrollar el backend necesario para procesar la información ingresada en el formulario.
Asegurar la seguridad y privacidad de los datos del candidato.

## Primera tarea
El objetivo es crear el modelo de datos que permitirá persistir la información que maneja el caso de uso anterior. El proyecto usa Prisma. Tendrás que actualizar el fichero @schema.prisma con el resultado

# Segundo prompt
La segunda tarea para implementar la User Story anterior es la del código del backend. Primero define una estructura de carpetas en formato bash para poder crearla, y después los ficheros que necesitamos para la historia de usuario.

# Tercer prompt
Ahora que existen los ficheros, necesitaré el código que implemente la parte del backend del caso de uso

# Cuarto prompt 
La tercera tarea, consiste en implementar la parte del frontal con React para implementar la historia de usuario. Primero, empieza por crear las carpetas de la estructura del frontend usando clean architecture, hazlo con código bash ejecutable

# Quinto prompt
Ahora que existen los ficheros, necesitaré la implementación de cada uno para que quede totalmente implementada la historia de usuario en la que estamos trabajando

# Sexto prompt
ADicionalmente a lo anterior, necesitamos tener una página donde el usuario pueda introducir los datos de los nuevos candidatos, siguiendo estos criterios de aceptación:

 - Accesibilidad de la función: Debe haber un botón o enlace claramente visible para añadir un nuevo candidato desde la página principal del dashboard del reclutador.
 - Formulario de ingreso de datos: Al seleccionar la opción de añadir candidato, se debe presentar un formulario que incluya los campos necesarios para capturar la información del candidato como nombre, apellido, correo electrónico, teléfono, dirección, educación y experiencia laboral.
 - Validación de datos: El formulario debe validar los datos ingresados para asegurar que son completos y correctos. Por ejemplo, el correo electrónico debe tener un formato válido y los campos obligatorios no deben estar vacíos.
 - Carga de documentos: El reclutador debe tener la opción de cargar el CV del candidato en formato PDF o DOCX.
 - Confirmación de añadido: Una vez completado el formulario y enviada la información, debe aparecer un mensaje de confirmación indicando que el candidato ha sido añadido exitosamente al sistema.
 - Errores y manejo de excepciones: En caso de error (por ejemplo, fallo en la conexión con el servidor), el sistema debe mostrar un mensaje adecuado al usuario para informarle del problema.
 - Accesibilidad y compatibilidad: La funcionalidad debe ser accesible y compatible con diferentes dispositivos y navegadores web.

Notas:

 - La interfaz debe ser intuitiva y fácil de usar para minimizar el tiempo de entrenamiento necesario para los nuevos reclutadores.
 - Considerar la posibilidad de integrar funcionalidades de autocompletado para los campos de educación y experiencia laboral, basados en datos preexistentes en el sistema.

# Séptimo prompt
Adelante, realiza la implementación , puedes modificar ficheros existentes y proponer la creación de ficheros nuevos

# Octavo prompt
I can't see how to add candidates in http://localhost:3000/

# Noveno prompt
I think we have to update src/App.tsx to link with the add candidate feature

# Conclusiones
Y luego he entrado en un bucle de errores que no ha podido resolver.

He usado Cursor con el modelo cursor-small, quizás con el modelo gpt4o hubiera ido mejor, lo intentaré replicar con este último
