[![npm version](https://badge.fury.io/js/is-server-side.svg)](https://badge.fury.io/js/is-server-side)

# is-server-side

> This was merged into [next-utils](https://github.com/Xunnamius/next-utils). Hence, this repo has been archived.

This package exports a function that, when called, will tell you if your
execution environment is browser-like (e.g. Chrome or Firefox) or server-like
(e.g. Node). Useful for [Next.js](https://nextjs.org/) and other
fullstack/isomorphic apps.

This package includes TypeScript types and provides:

+ A UMD/CJS/AMD bundle (no tree-shaking)
+ ES2015 modules (tree-shaking)

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

* 1.0.x Initial release
