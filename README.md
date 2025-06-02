<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Requisitos previos

- [Node.js](https://nodejs.org/) 18.x o superior
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) para la base de datos

## Instalación

```bash
npm install
```

## Configuración de variables de entorno

Copia el archivo `.env.example` a `.env` y edítalo según tu entorno:

```bash
cp .env.example .env
```

## Levantar la base de datos con Docker Compose

Para iniciar la base de datos localmente, ejecuta:

```bash
docker-compose up -d
```

Esto levantará los servicios definidos en el archivo `docker-compose.yml` (por ejemplo, PostgreSQL o MySQL).  
Asegúrate de que los valores de conexión en tu `.env` coincidan con los del `docker-compose.yml`.

## Ejecución de la aplicación

```bash
# desarrollo
npm run start

# modo watch
npm run start:dev

# producción
npm run start:prod
```

La API estará disponible en [http://localhost:3000](http://localhost:3000) por defecto.

## Pruebas

```bash
# pruebas unitarias
npm run test

# pruebas e2e
npm run test:e2e

# cobertura de pruebas
npm run test:cov
```

## Soporte

Nest es un proyecto open source con licencia MIT. Si quieres apoyar, revisa [este enlace](https://docs.nestjs.com/support).

## Contacto

- Autor - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licencia

Nest está bajo licencia [MIT](LICENSE).
