## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash

# e2e tests
$ yarn run test:e2e

```

## Api documentation

Encode url

```bash
curl --location --request POST 'http://localhost:3000/encode' \
--header 'Content-Type: application/json' \
--data-raw '{
  "url":"http://google.com/sdf"
}'
```

Decode url

```bash
curl --location --request POST 'http://localhost:3000/decode' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "http://localhost:3000/Dy8CuuZYJlg"
}'

```
