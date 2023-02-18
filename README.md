# NestJS starter with TypeORM (0.3) and database MariaDB

## Installation

```bash
$ npm install
```

or using yarn

```bash
$ yarn install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

Make sure to use npm for commands follow, because yarn does not support $npm_config_name.

```
# generate migration
npm run migration:generate --name=ExampleMigration

# create migration
npm run migration:create --name=ExampleMigration
```

Migration files are placed under src/database/migrations.

## Env configuration

```
NODE_ENV=development|production (optional, default development)
```

```
# express
API_PORT=3000 (optional, default 3000)
API_HOST=0.0.0.0 (optional, default 0.0.0.0)
```

```
# cors
CORS_ALLOWED_ORIGING=string (optional, default *, for eg. http://localhost:3000, https://domain.com)
```

```
# throttler
THROTTLER_LIMIT=100 (optional, default 100 - count of request in time window)
THROTTLER_TTL_S=60 (optional, default 60 - time window)
```

```
# body parser
MAX_FILE_SIZE_KB=20971520 (optional, default 20971520 - 20MB)
```

```
# morgan
USE_LOGS=boolean (optional, default true)
```

```
# swagger config
USE_SWAGGER=true (optional, default true)
SWAGGER_ROUTE=/swagger (required, if USE_SWAGGER true)
```

```
# typeorm
TYPEORM_CONNECTION=mysql|mariadb (required)
TYPEORM_HOST=localhost (required)
TYPEORM_USERNAME=user (required)
TYPEORM_PASSWORD=password (required)
TYPEORM_DATABASE=test (required)
TYPEORM_PORT=3306 (required)
TYPEORM_SYNCHRONIZE=false (optional, default false)
TYPEORM_LOGGING=true (optional, default false)
TYPEORM_DEBUG=false (optional, default false)
```
