# PROMPT 1: Generación de descripción detallada de tickets de trabajo:

Actua como un desarrollador experto y partiendo de esta historia de usuario genera la descripción detallada de los tickets de trabajo necesarios: 

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

+ Implementar la interfaz de usuario para el formulario de añadir candidato.
+ Desarrollar el backend necesario para procesar la información ingresada en el formulario.
+ Asegurar la seguridad y privacidad de los datos del candidato.

# PROMPT 2: Interfaz para añadir candidatos

Vamos a desarrollar la aplicación LTI. En @AI4Devs-lab-ides tenemos la arquitectura básica del proyecto con un backend en Node con Express, un Frontend en React y una base de datos en Postgre SQL. 

Comenzaremos con el primer ticket de trabajo descrito en @ticket1.md 

## PROMPT2b: Corrección de diseño

Mejora el diseño de la web y el formulario utilizando bootstrap para que sea mucho más atractivo a la vista y sencillo. 

Mejora también el estilo del formulario en  y no solo del dashbaord @AddCandidateForm.tsx 

# PROMPT 3: Backend

Ahora sigue las instrucciones del @ticket2.md para implementar el backend del sistema. Comienza con la subtarea 1. Hazlo siguiendo TDD y crea primero los tests para el nuevo servicio. Decide la mejor estructura de archivos para implementar la tarea dentro de @src 

## PROMPT3b: Validación de datos

Continuemos con la segunda subtarea del @ticket2.md. Haz que la API devuelva el error más adecuado cuando la información recibida no sea correcta. Todos los campos deben ser obligatorios @AI4Devs-lab-ides 

(Sobre la función del middleware de validación): Añade una validación para comprobar que el formato del email es el correcto

# PROMPT 4: BBDD

Ahora implementa la subtarea 3 de @ticket2.md . Ten en cuenta que mi base de datos todavía no tiene ni una tabla creada 

# PROMPT 5: Integración

Modifica el @AddCandidateForm.tsx para que la información del formulario se vuelque en una llamada al endpoint /candidates en el localhost:3010

# PROMPT 5b: Corrección de errores
El servidor está dando un error de CORS