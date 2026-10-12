# Programa de Evaluación Nutricional en Hemodiálisis – HRHVM (sin internet)

Funciona en computadoras y tablets Android. **Los datos de los pacientes se guardan solo en el equipo de cada persona** y no se envían a internet. Una vez instalado, funciona sin conexión.

## Contenido
- `index.html` y carpeta `vendor`: el programa.
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`: permiten instalarlo en la tablet y usarlo sin internet.

## Instalación en tablets Android (una sola vez, con internet)
El programa se publica gratis en GitHub Pages. La dirección es pública, pero **el programa no trae ningún paciente**: las listas se cargan después, desde tu Excel, y quedan solo en cada equipo.

1. Crea una cuenta gratuita en github.com.
2. Crea un repositorio **público** llamado `hemodialisis` (los repositorios privados no publican páginas en el plan gratuito).
3. En el repositorio: **Add file → Upload files**. Arrastra todo el contenido de esta carpeta (incluida la carpeta `vendor`) y pulsa **Commit changes**.
4. Entra a **Settings → Pages**. En *Branch* elige `main` y la carpeta `/ (root)`, y pulsa **Save**.
5. Espera 1 o 2 minutos. GitHub muestra la dirección: `https://TU-USUARIO.github.io/hemodialisis/`.
6. En cada tablet, abre esa dirección con **Chrome**, toca el menú **⋮** y elige **Instalar aplicación** (o *Añadir a pantalla de inicio*). Queda un ícono como cualquier aplicación.

## Uso en computadoras con Windows
Copia esta carpeta al equipo y abre `index.html` con Chrome o Edge. También funciona con la dirección de GitHub Pages.

## Primer uso (hazlo tú, Lincker)
1. Abre el programa, pulsa **Cargar lista del mes (Excel)**, sube tu archivo de sectorización y elige la hoja del mes.
2. Pulsa **Respaldo → Descargar mi respaldo**. Se guarda un archivo `.json` en la carpeta Descargas.
3. Envía ese archivo a tus colegas (WhatsApp o correo). Cada colega abre el programa, entra a **Respaldo → Importar** y elige el archivo. Así todos parten con la misma lista de pacientes.

## Cada día
- Evalúa normalmente. Todo se guarda al pulsar **Guardar ficha**.
- Escribe tu nombre en **Respaldo → Tu nombre** para que salga en las fichas.
- Cuando el programa te lo recuerde (franja amarilla), pulsa **Descargar respaldo**.

## Juntar el trabajo de todos
Cada colega descarga su respaldo y te lo envía. Tú lo importas en **Respaldo → Importar**. El programa une las fichas: si el mismo paciente está en dos respaldos, se queda con la ficha más reciente. Puedes importar tantos respaldos como quieras. Después, **Exportar a Excel** te da todo lo evaluado.

## Cada mes
Usa **Crear mes copiando el anterior** o **Cargar lista del mes (Excel)**. Para que todos tengan la misma lista, carga el mes tú, descarga el respaldo y envíalo a tus colegas.

## Cosas importantes
- **Si se pierde o se borra el equipo, se pierden las fichas** que no estén respaldadas. Descarga el respaldo seguido y guarda copias (por ejemplo en tu correo).
- No borres los "datos del sitio" ni "borrar datos de navegación" de Chrome para esta aplicación: elimina las fichas.
- Dos personas no deberían evaluar al mismo paciente el mismo mes, porque se conserva solo una de las dos fichas.
- Si actualizas el programa, cambia `VERSION` en `sw.js` (por ejemplo a `hd-v2`) para que las tablets descarguen la versión nueva.
