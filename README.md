# Task Manager Application

Esta es una aplicación de gestión de tareas (To-Do List) construida con Angular. Permite a los usuarios gestionar sus tareas de manera eficiente, con una interfaz moderna y profesional.

## Instrucciones de instalación

1. **Clona el repositorio:**
   ```bash
   git clone <repository-url>
   cd to-do-list
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Asegúrate de tener JSON Server versión 0.17.4:**
   ```bash
   npm install json-server@0.17.4 --save-dev
   ```

4. **Inicia JSON Server:**
   ```bash
   npx json-server --watch db.json
   ```
   Esto iniciará JSON Server en `http://localhost:3000`.

5. **Inicia la aplicación Angular:**
   ```bash
   ng serve
   ```
   La aplicación estará disponible en `http://localhost:4200`.

6. **O puedes iniciar ambos servidores juntos:**
   ```bash
   npm run start:all
   ```
