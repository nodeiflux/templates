# Nodeiflux Templates

A collection of templates for and by the Nodeiflux Discord community

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Node version ≥ 16](https://img.shields.io/badge/node-%E2%89%A516-green)](https://nodejs.org)

---

## Usage

```sh
npx degit nodeiflux/templates/<template name> [optional folder name]
```

Example, using express:

```sh
npx degit nodeiflux/templates/express
```

Example, using curveball in a specific folder:

```sh
npx degit nodeiflux/templates/curveball my-cool-api
```

## Templates

These are the current templates (click to expand):
<details>
  <summary>express-minimal</summary >
  Smallest useable express template <br />
  This template not relevant for most people.
  Unless you have specific requirements and need something to build from, quickly
</details>
<details>
  <summary>curveball</summary>
  a reference curveball implementation
</details>

## Contributing

We welcome contributions with open arms! Please be mindful to follow our [Code of Conduct](code_of_conduct.md)

If you wish to introduce a new template, please use plop to scaffold it:

```sh
npm run plop
```
