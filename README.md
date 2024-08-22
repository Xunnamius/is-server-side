<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![!!UNMAINTAINED!!][badge-unmaintained]][link-unmaintained]

<!-- badges-end -->

# ⛔️ DEPRECATED/UNMAINTAINED

> [!CAUTION]
>
> This package was more a proof-of-concept for publishing a package rather than
> something super useful. Either way, any useful functionality was merged into
> [next-utils](https://github.com/Xunnamius/next-utils) long ago.

This package exports a function that, when called, will tell you if your
execution environment is browser-like (e.g. Chrome or Firefox) or server-like
(e.g. Node). Useful for [Next.js](https://nextjs.org/) and other
fullstack/isomorphic apps.

This package includes TypeScript types and provides:

- A UMD/CJS/AMD bundle (no tree-shaking)
- ES2015 modules (tree-shaking)

## Install

```sh
npm install is-server-side
```

## Usage

```TypeScript
import { isServer } from 'is-server-side'

isServer() && doServerStuff();
doOtherStuff();
```

## Contributing

Issues and pull requests are welcome! In lieu of a formal styleguide, take care
to maintain the existing coding style.

Add unit tests for any new or changed functionality. Please lint and test your
code!

## Release History

- 1.0.x Initial release

[badge-blm]: https://xunn.at/badge-blm 'Join the movement!'
[link-blm]: https://xunn.at/donate-blm
[badge-unmaintained]:
  https://xunn.at/badge-unmaintained
  'Unfortunately, this project is unmaintained (forks welcome!)'
[link-unmaintained]: https://xunn.at/link-unmaintained
