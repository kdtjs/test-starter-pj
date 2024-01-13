# {%packageName%}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![ci][ci-src]][ci-href]
[![issues][issues-src]][issues-href]
[![license][license-src]][license-href]

{%packageDescription%}

## Usage

Install package:

```sh
# npm
npm install {%packageName%}

# yarn
yarn add {%packageName%}

# pnpm
pnpm install {%packageName%}

# bun
bun install {%packageName%}
```

Import:

```js
// ESM
import { fn } from '{%packageName%}'

// CommonJS
const { fn } = require('{%packageName%}')
```

## Roadmap

No changes are currently planned.

## Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our code of conduct, and the process for
submitting pull
requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see
the [tags on this repository](../../tags).

## License

Published under [MIT License](LICENSE.md).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/{%packageName%}?style=flat&colorA=1B3C4A&colorB=32A9C3&label=version
[npm-version-href]: https://npmjs.com/package/{%packageName%}
[npm-downloads-src]: https://img.shields.io/npm/dm/{%packageName%}?style=flat&colorA=1B3C4A&colorB=32A9C3&label=downloads
[npm-downloads-href]: https://npmjs.com/package/{%packageName%}
[ci-src]: https://img.shields.io/github/actions/workflow/status/{%repo%}/ci.yml?style=flat&colorA=1B3C4A&colorB=32A9C3&label=ci
[ci-href]: https://github.com/{%repo%}/actions/workflows/ci.yml
[issues-src]: https://img.shields.io/github/issues/{%repo%}?style=flat&colorA=1B3C4A&colorB=32A9C3&label=issues
[issues-href]: https://github.com/{%repo%}/issues
[license-src]: https://img.shields.io/npm/l/{%packageName%}?style=flat&colorA=1B3C4A&colorB=32A9C3&label=license
[license-href]: https://github.com/{%packageName%}/blob/main/LICENSE.md
