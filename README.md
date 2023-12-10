# Portafolio construido en react
## Gonzalez Federico Fabian
¡Bienvenido a este emocionante proyecto en progreso!.
Este proyecto tiene como finalidades:
- 🎓 Mostrar los conocimientos adquiridos.
- 🌐 Presentar de mi utilizacion de tecnologias del tipo Front-End y deployeo utilizando #FTPS & #Docker.

# Version funcional.
En este momento ahi una version del proyecto funcionando en servidor.

Aplicacion corriendo sobre  `Azure Web Aplication`

>  [`Puedes visualizarlo desde aquí`](https://portafoliogonzalezfederico.azurewebsites.net/)

> `Estamos mejorando progresivamente la aplicacion aun esta en desarrollo`.
Deployada utilizano #FTPS
# Tecnologias implicadas.
- NodeJs 18
- React
- Azure Web Aplication
- Cliente FTPS FileZilla
- Docker

# Build
```sh
npm run build
```
> Ejecutar
```sh
npm run start
```
> Crear y ejecutar imagen docker
```docker
sudo docker build . -t SaludoDocker
sudo docker run saludodocker
```
> Guardar imagen de contenedor para utilizar en otro entorno

```docker
sudo docker save -o dockercontenedor.tar saludodocker
```

