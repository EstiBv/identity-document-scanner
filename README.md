# `Prueba Técnica - Z1 `

`🎟 Reto planteado para proceso de selección.`

---

#### Índice

- Objetivos
  - Objetivos generales y objetivos técnicos
- Flujo del proyecto
- Resultado
  - Imagen de la aplicación _vistas_
- Estructura del proyecto
- Conclusiones

---

#### ` 🏁 Objetivos generales`

1️⃣ Comprensión e implemetación de los requisitos

2️⃣ Buena comunicación en planteamiento de posibles dudas/decisiones

3️⃣ Calidad del código (buenas prácticas)

4️⃣ Eficiencia de la solución

5️⃣ Familiaridad con librerías, framesworks y plataformas de desarrollo

---

#### ` ⚙️ Objetivos técnicos`

##### `Identity document scanner`

☝ Proyecto desarrollado en React con TypeScript y usando el menor número de dependencias posibles

✌️ Estilos en scss (o styled components)

🤟 Añadir test unitarios y de integración

🖖 Maquetar según los estilos indicados en invisión

🖐 URL del backend mediante petición POST

---

#### ` 🗺 Flujo del proyecto`

⏺ Pulsar "take picture" para abrir la cámara.

📸 Abierta la cámara, se realizan fotos de manera automática y en segundo plano se envían al backend

🔴 / 🟢 La interface se pinta roja si el backend deniega la validación de la captura y verde si es aceptada.

✅ En el caso de ser aceptada, se pasa al usuario (de manera automática) a la pantalla principal.

📇 Cuando el usuario vaya a la pantalla principal (mediante el botón de cancel o mediante la aceptación de la captura) se ha de mostrar la última foto registrada con la respuesta del backend (aceptada o denegada).

---

#### ` 📸 Resultado`

_Index Scan_

![FireShot Capture 289 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108686489-c96b6400-74f5-11eb-8af8-d87226ef69de.png)

_Camera_

![FireShot Capture 286 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108686322-89a47c80-74f5-11eb-9a17-933f4bfbfbf9.png)
_Open Camera_

![FireShot Capture 280 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108685831-e7849480-74f4-11eb-8b3d-d2dc8d09209e.png)

_Rejected_

![FireShot Capture 265 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108685929-04b96300-74f5-11eb-9940-d1f9d1ec0c0f.png)

_Scan Rejected_

![FireShot Capture 283 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108686036-2a466c80-74f5-11eb-8d3d-ff5a03b14fd7.png)

_Accepted_

![FireShot Capture 271 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108686099-3d593c80-74f5-11eb-9f42-03926f0bace5.png)

_Scan Accepted_

![FireShot Capture 268 - BankClient - Indentity Document Scanner - localhost](https://user-images.githubusercontent.com/70572595/108686129-4ba75880-74f5-11eb-9edd-15c4a617b941.png)

---

#### `🚀 Estructura del proyecto`

##### Tecnologías

Para desarrollo se han utilizado las siguientes tecnologías:

- React
- Typescript
- Node-sass

##### Estructura Interna

Components:

- App (Rutas)
  - Index
  - Camera
    - Taken
    - Error
  - Scan
    - Accepted
    - Rejected
- Camera
  - Importa datos de la respuesta del backend
  - Maneja apertura de cámara
    - Loader para tiempo de respuesta
  - Renderiza componente según respuesta
- Scanner
  - Scanner Index (index app)
  - Scanner Accepted
  - Scanner Rejected
- Services
  - Fetch (method : Post)
- Models Interfaces
  - ICamera
  - IData
  - IImage

Stylesheets:

- index (estilos generales de la app)
- app (@imports de los componentes)
- pages (componentes)
- core
  - mixins
  - variables

Assets (icons y plantilla Card identity)

- Camera
- Scan

---

#### `🧗‍♀️ Desafíos y conclusiones `

👩‍💻 Ha sido un reto divertido y muy entretenido con el que he aprendido y me he superado a mi misma. Se que aún tengo recorrido por delante y ganas no me faltan!

Es mi primer proyecto usando typescript con react.
He comprendido el potencial de typescript y la importancia de conocer los tipos de datos que manejamos, todo para facilitar el trabajo a lxs compañerxs y generar un tipado fuerte para obtener un producto de mayor calidad.
Es muy top y continuaré aprendiendo 🙂

⚠️ Handicaps & advantages ⚖️

- No he logrado superar el reto con las espectativas iniciales aunque he aprendido muchísimo y me siento agradecida y motivada para _seguir fallando, pero fallando mejor_.
- He de mejorar tanto el uso de tipados y funcionalidades (para estructurar con mayor simplicidad el código) como aprender a realizar test unitarios y de integración (para aumentar garantía de calidad, así ganamos todxs)

---

Gracias por la oportunidad y por la iniciativa de realizar comunidad mediante un proceso de seleccón!!
