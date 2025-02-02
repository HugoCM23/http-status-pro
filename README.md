# HttpStatusPro 🚀

**HttpStatusPro** es un paquete profesional para Node.js diseñado para manejar respuestas HTTP de manera eficiente y consistente. Proporciona clases para gestionar errores y estados de éxito, lo que facilita la creación de APIs robustas y bien estructuradas.

## Características ✨

- **Manejo de Errores**: Clase `ErrorServer` para gestionar errores HTTP comunes con códigos y mensajes predefinidos.
- **Manejo de Éxitos**: Clase `StatusServer` para gestionar respuestas exitosas con códigos y mensajes predefinidos.
- **Extensible**: Fácil de extender y personalizar según las necesidades de tu proyecto.
- **TypeScript**: Totalmente escrito en TypeScript con tipos fuertes para una mejor experiencia de desarrollo.

## Instalación 📦

Puedes instalar **HttpStatusPro** usando npm:

```bash
npm install http-status-pro

# Uso Básico 🛠️

## Manejo de Errores

import { ErrorServer } from 'http-status-pro';

// Crear un error personalizado
const error = new ErrorServer('NOT_FOUND', 'Resource not found');
console.log(error.code); // 404
console.log(error.error); // Not Found
console.log(error.message); // Resource not found

## Manejo de Éxitos

import { StatusServer } from 'http-status-pro';

// Obtener un estado exitoso
const status = new StatusServer();
const response = status.getStatus('CREATED', 'User created successfully');
console.log(response.code); // 201
console.log(response.message); // User created successfully