Este proyecto es una aplicación web desarrollada como trabajo práctico, la cual permite gestionar un listado de países de habla hispana. La aplicación consume datos de una API externa, los procesa y los almacena en una base de datos MongoDB para luego ser administrados a través de una interfaz web con operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

## Objetivos del Proyecto

El desarrollo de esta aplicación cumple con los siguientes objetivos clave:

-   **Consumo de API Externa:** Obtener datos de países desde la API de Paises
-   **Procesamiento de Datos:** Filtrar los países para conservar únicamente aquellos que tienen el español como idioma oficial y limpiar los datos para almacenar solo la información requerida.
-   **Persistencia en Base de Datos:** Guardar la información procesada en una base de datos MongoDB con un esquema limpio y consistente.
-   **Interfaz Web (Dashboard):** Mostrar los datos en un dashboard web que incluye una tabla con los países, totales de población y área, y un promedio del índice Gini.
-   **Funcionalidad CRUD:** Implementar las operaciones completas para Crear, Leer, Actualizar y Eliminar países de la base de datos.
-   **Validaciones en Backend:** Incluir validaciones robustas para los datos enviados a través de formularios, asegurando la integridad de la información.

## Tecnologías Utilizadas

-   **Backend:**
    -   **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
    -   **Express.js:** Framework para la construcción de la aplicación web y el manejo de rutas y middleware.
-   **Base de Datos:**
    -   **MongoDB:** Base de datos NoSQL orientada a documentos.
    -   **Mongoose:** ODM (Object Data Modeling) para modelar e interactuar con MongoDB de una manera estructurada.
-   **Frontend (Vistas):**
    -   **EJS:** Motor de plantillas para generar HTML dinámicamente.
-   **Herramientas y Librerías Adicionales:**
    -   **Axios:** Cliente HTTP para realizar las solicitudes a la API de REST Countries.
    -   **express-validator:** Middleware para el manejo de validaciones en los formularios.
    -   **dotenv:** Para la gestión de variables de entorno.
    -   **express-ejs-layouts:** Para la gestión de plantillas y layouts en EJS.

## Pasos de Ejecución
1.  **Clonar el Repositorio:**
    Ejecuta los siguientes comando en consola

    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    

2.  **Instalar Dependencias:**
    Ejecuta el siguiente comando para instalar todas las librerías necesarias definidas en el `package.json`.
    
    npm install
    

3.  **Configurar Variables de Entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto. Este archivo contendrá la URI de conexión a tu base de datos.
    
    MONGO_URI="mongodb+srv://<usuario>:<password>@cluster.../nombre-db"
    
    *Reemplaza el valor con tu propia cadena de conexión de MongoDB.*

4.  **(Opcional) Cargar Datos Iniciales desde la API:**
    El proyecto incluye un script para poblar la base de datos con los países hispanohablantes de América. Para ejecutarlo, usa el siguiente comando:
    
    node src/cargarPaises.js
    
    *Este script tiene una validación para no duplicar países si ya existen en la base de datos.*

5.  **Iniciar el Servidor:**
    Para correr la aplicación escribe el siguiente comando en la consola:

    node src/app.mjs
    

6.  **Acceder a la Aplicación:**
    Abre tu navegador y visita [http://localhost:3000]