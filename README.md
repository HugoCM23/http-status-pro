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
```
# Uso Básico 🛠️

## Manejo de Errores
```bash
import { ErrorServer } from 'http-status-pro';

// Crear un error personalizado
const error = new ErrorServer('NOT_FOUND', 'Resource not found');
console.log(error.code); // 404
console.log(error.error); // Not Found
console.log(error.message); // Resource not found
```
## Manejo de Éxitos
```bash
import { StatusServer } from 'http-status-pro';

// Obtener un estado exitoso
const status = new StatusServer();
const response = status.getStatus('CREATED', 'User created successfully');
console.log(response.code); // 201
console.log(response.message); // User created successfully

```
## Contribuir 🤝

¡Contribuciones son bienvenidas! Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. **Haz un fork del repositorio.**
2. **Crea una nueva rama**:
   ```bash
   git checkout -b feature/nueva-funcionalidad

Realiza tus cambios y haz commit:

```bash
git commit -am 'Añade nueva funcionalidad'
```
Haz push a la rama:

```bash
git push origin feature/nueva-funcionalidad
```
Abre un Pull Request en GitHub.

Puedes encontrar el repositorio en [GitHub repositorio](https://github.com/HugoCM23/http-status-pro)

### Explicación de los cambios:
1. **Lista numerada**: Se utilizó una lista numerada para que los pasos sean más claros y fáciles de seguir.
2. **Código en bloques**: Los comandos de Git se colocaron dentro de bloques de código para resaltarlos y facilitar su copia y uso.
3. **Enlace al repositorio**: Se añadió un enlace directo al repositorio de GitHub para que los usuarios puedan acceder fácilmente.

Este formato es limpio, profesional y fácil de leer. ¡Espero que te sea útil! 😊
