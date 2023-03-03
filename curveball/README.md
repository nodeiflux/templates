# Curveball template

This template uses Curveball, a TypeScript-first library inspired by Koa.

## Features

🛎️ Services \
💉 Inversion of Control (*via dependency inversion*) \
🏗️ Structured by feature. \
🦦 Mongoose (*with fallback to mongo memory server*) \
🤓 Typed environment variables \
🦢 Graceful shutdown

## Usage

To get started, run:

```sh
npx degit nodeiflux/templates/curveball
```

To start developing, run:

```sh
npm run dev
```

This will host the app on <http://localhost:8000>. You can configure this port with environment variables or .env file.

To build for production:

```sh
npm run build
```

## Opinionated template

This templates aims to be fully featured and testable. This naturally means it comes with some degree of opinionated code, however, Curveball and the constituent parts of the template are highly customisable, so unlike opinionated frameworks, you can tune this exactly to your preferences.

It is written to be modular and pluggable, you can easily remove or replace any part you want.

## Further information

- Curveball: <https://curveballjs.org/>
- ts-dotenv: <https://npmjs.com/package/ts-dotenv>

## License

MIT: <https://nicholai.mit-license.org>
