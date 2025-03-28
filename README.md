# HttpStatusPro 🚀

**HttpStatusPro** es un paquete profesional para Node.js diseñado para manejar respuestas HTTP de manera eficiente y consistente. Proporciona clases para gestionar errores y estados de éxito, lo que facilita la creación de APIs robustas y bien estructuradas. Es especialmente útil en proyectos basados en **NestJS**, donde la claridad y la consistencia en las respuestas HTTP son fundamentales.

## Características ✨

- **Manejo de Errores**: Clase `ErrorServer` para gestionar errores HTTP comunes con códigos y mensajes predefinidos.
- **Manejo de Éxitos**: Clase `StatusServer` para gestionar respuestas exitosas con códigos y mensajes predefinidos.
- **Extensible**: Fácil de extender y personalizar según las necesidades de tu proyecto.
- **TypeScript**: Totalmente escrito en TypeScript con tipos fuertes para una mejor experiencia de desarrollo.
- **Integración con NestJS**: Diseñado para integrarse fácilmente con **NestJS**, permitiendo respuestas HTTP consistentes en controladores y servicios.

## Instalación 📦

Puedes instalar **HttpStatusPro** usando npm:

```bash
npm install http-status-pro
```
# Uso Básico 🛠️

## Manejo de Errores
```bash
import { ErrorServer } from './ErrorServer';
// Crear un error con un tipo predefinido y un mensaje personalizado
const customError = new ErrorServer(ErrorServer.BAD_REQUEST, 'Custom bad request message');
console.log(customError.code); // Salida: 400
console.log(customError.message); // Salida: Custom bad request message
```
## Manejo de Éxitos
```bash
import { StatusServer } from './StatusServer';

// Usar un estado directamente con un mensaje personalizado
const customCreatedStatus = StatusServer.getStatus(StatusServer.CREATED, 'Custom creation message');
console.log(customCreatedStatus);
// Salida: { code: 201, message: 'Custom creation message' }

// Usar un estado directamente sin mensaje personalizado
const defaultCreatedStatus = StatusServer.getStatus(StatusServer.CREATED);
console.log(defaultCreatedStatus);
// Salida: { code: 201, message: 'Resource Created Successfully' }

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
