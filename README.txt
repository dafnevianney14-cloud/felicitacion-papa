# 💙 Felicitación para papá — versión cinematográfica

Esta versión funciona con Python + Flask y está diseñada para sentirse más
como un pequeño video interactivo que como una página normal.

Incluye:
- Escenas de pantalla completa.
- Transiciones al hacer scroll.
- Indicadores laterales de progreso.
- Animaciones, estrellas, partículas, globos y corazones.
- Las dos fotografías proporcionadas.
- Música ambiental suave generada directamente en el navegador.
- Botón para activar/desactivar la música.
- Confeti y corazones al final.

## Ejecutar

```bash
pip install -r requirements.txt
python app.py
```

Abre:

http://127.0.0.1:5000

### Nota sobre la música
La página usa Web Audio API para crear una melodía ambiental sencilla.
El navegador normalmente requiere una interacción del usuario antes de
permitir audio, por eso existe el botón "Música suave".

## Subir como enlace
El proyecto puede desplegarse en un servicio que ejecute Flask.
Conserva toda la estructura de carpetas y archivos.


### Música
Ahora incluye un archivo real `static/audio/mananitas_instrumental.wav`:
una versión instrumental suave, sin voz, pensada como música de fondo.
En la página pulsa "Música suave" para iniciarla.
