<div align="center" style="diplay: flex;">

</div>

# External API Sys
This project is a Vue.js application built with Nuxt.js, Vuetify, and Material Icons.

## Requirements

- **Node.js**: [version 22](https://nodejs.org/es/download?version=22)

---

## Dependencies

- **Vue**: [3.5.20](https://vuejs.org/guide/introduction.html)
- **Nuxt**: [3.18.1](https://nuxt.com/docs/3.x/getting-started/introduction)
- **Vuetify**: [3.9.6](https://vuetifyjs.com/en/components/all/#containment)
- **Material Icons (@mdi/font)**: [7.4.47](https://pictogrammers.github.io/@mdi/font/7.4.47/)

---

## Step by Step

```bash
#Install the project dependencies:
$ npm install

#Run project in develoment:
$ npm run dev

#Build project:
$ npm run generate

#exect the build:
$ npm run preview
```


## How run the project using Docker: (development mode)

### Prerequisites
- Docker installed and running

### Steps
1. Clone the repository and navigate to the project directory:

2. Build the development Docker image:
```console
$ docker build --target builder -t fp-external-api/sys:development .
```
3. Run the Docker container in development mode:
```console
$ docker run --rm -p 1414:1414 -it -v "$(pwd):/fp-sys/" fp-external-api/sys:development /bin/bash -c "npm i && npm run dev"
```

This mode mounts the current directory to the `/fp-sys` directory inside the container, allowing you to see changes in real-time without rebuilding the image. It also maps port 9976 on your host machine to port 1414 in the container, which is where the Nuxt application runs by default.

press `Ctrl+C` to stop the container.


# How run the project using Docker: (production mode)

### Prerequisites
- Docker installed and running

### Steps
1. Clone the repository and navigate to the project directory:

2. Build the Docker image:
```console
$ docker build -t fp-external-api/sys .
```
3. Run the Docker container:
```console
$ docker run -d -p 8080:80 fp-external-api/sys
```

This app runs over port 80 inside the container using nginx server, and the command maps it to port 8080 on your host machine.