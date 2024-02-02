# README

Este repositorio contiene tanto el frontend como el backend de la aplicación. Sigue las instrucciones a continuación para ejecutar ambos:

## 1. Backend

### Pasos:

1. Abre la terminal y navega al directorio del servidor:

    ```bash
    cd server
    ```

2. Instala las dependencias utilizando npm (o pnpm, o yarn):

    ```bash
    npm install
    ```

3. Ejecuta el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

El backend estará disponible en el puerto 3456. Si este puerto está ocupado, puedes cambiar el valor editando la variable de entorno `PORT` en el archivo `.env`.

## 2. Frontend

### Pasos:

1. Abre otra terminal y navega al directorio del cliente:

    ```bash
    cd client
    ```

2. Instala las dependencias utilizando npm (o pnpm, o yarn):

    ```bash
    npm install
    ```

3. Ejecuta el frontend en modo desarrollo:

    ```bash
    npm run dev
    ```

## Notas

- Asegúrate de que el puerto 3456 esté disponible para el backend. Si no, edita la variable de entorno `PORT` en el archivo `.env`.

- La base de datos está desplegada en un servicio en la nube. La velocidad de las consultas dependerá de la conexión a internet.

- Si la base de datos en la nube no funciona, busca el archivo `script.sql` en la carpeta `database` y ejecuta los comandos que aparecen allí.
