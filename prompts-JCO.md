# PROMPT 1
Act as a senior software developer. Having as reference the user story below, describe in detail (in English) the needed 3 tickets.

"""

### Título: 
Añadir Candidato al Sistema

### Descripción: 
Como reclutador,
Quiero tener la capacidad de añadir candidatos al sistema ATS,
Para que pueda gestionar sus datos y procesos de selección de manera eficiente.

### Criterios de Aceptación:
- Accesibilidad de la función: Debe haber un botón o enlace claramente visible para añadir un nuevo candidato desde la página principal del dashboard del reclutador.
- Formulario de ingreso de datos: Al seleccionar la opción de añadir candidato, se debe presentar un formulario que incluya los campos necesarios para capturar la información del candidato como nombre, apellido, correo electrónico, teléfono, dirección, educación y experiencia laboral.
- Validación de datos: El formulario debe validar los datos ingresados para asegurar que son completos y correctos. Por ejemplo, el correo electrónico debe tener un formato válido y los campos obligatorios no deben estar vacíos.
- Carga de documentos: El reclutador debe tener la opción de cargar el CV del candidato en formato PDF o DOCX.
- Confirmación de añadido: Una vez completado el formulario y enviada la información, debe aparecer un mensaje de confirmación indicando que el candidato ha sido añadido exitosamente al sistema.
- Errores y manejo de excepciones: En caso de error (por ejemplo, fallo en la conexión con el servidor), el sistema debe mostrar un mensaje adecuado al usuario para informarle del problema.
- Accesibilidad y compatibilidad: La funcionalidad debe ser accesible y compatible con diferentes dispositivos y navegadores web.

### Notas:
- La interfaz debe ser intuitiva y fácil de usar para minimizar el tiempo de entrenamiento necesario para los nuevos reclutadores.
- Considerar la posibilidad de integrar funcionalidades de autocompletado para los campos de educación y experiencia laboral, basados en datos preexistentes en el sistema.

### Tareas Técnicas:
- Implementar la interfaz de usuario para el formulario de añadir candidato.
- Desarrollar el backend necesario para procesar la información ingresada en el formulario.
- Asegurar la seguridad y privacidad de los datos del candidato.
- 
"""

# PROMPT 2
Once the tickets are described, we are ready to start implementing the LTI application.
Let's start implementing the first ticket described in @ticket-1.md using the basic architecture, technologies and folder structure of AI4Devs-lab-ides folder
Make the design of the landing page and form more attractive using bootstrap.

# PROMPT 3
Let's continue with the implementation of the second ticket described in @ticket-2.md. 

# PROMPT 4
Let's continue with the implementation of the second ticket described in @ticket-3.md. 

# PROMPT 5
I get the following error when I try to add a candidate:
"""
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /api/candidates</pre>
</body>
</html>
"""

# PROMPT 6
Now I get the following error when I try to add a candidate:
"""
Error adding candidate: PrismaClientInitializationError: 
Invalid `prisma.candidate.findUnique()` invocation in
/Users/bdeo/AI4Devs/repos/AI4Devs-lab-ides/backend/src/controllers/candidateController.ts:22:54

  19 }
  20 
  21 // Check if email already exists
→ 22 const existingCandidate = await prisma.candidate.findUnique(
Can't reach database server at `localhost`:`5432`

Please make sure your database server is running at `localhost`:`5432`.
    at In.handleRequestError (/Users/bdeo/AI4Devs/repos/AI4Devs-lab-ides/backend/node_modules/@prisma/client/runtime/library.js:122:7154)
    at In.handleAndLogRequestError (/Users/bdeo/AI4Devs/repos/AI4Devs-lab-ides/backend/node_modules/@prisma/client/runtime/library.js:122:6188)
    at In.request (/Users/bdeo/AI4Devs/repos/AI4Devs-lab-ides/backend/node_modules/@prisma/client/runtime/library.js:122:5896)
    at l (/Users/bdeo/AI4Devs/repos/AI4Devs-lab-ides/backend/node_modules/@prisma/client/runtime/library.js:127:11167) {
  clientVersion: '5.13.0',
  errorCode: undefined
}
"""

# PROMPT 7
Finally, add some tests to test the platform with jest.



