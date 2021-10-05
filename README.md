# Entry point ![Typescript][ts]

![Maintained][maintained]
![License][license]
![Version][ver]

Zero dependency, simple typescript decorator that makes OOP-like execution easier for class-contained, asyncrhonous entry points.

This is specially oriented to node CLI apps, that need a "main" method that usually is asyncrhonous. But can be synchronous and the environment can be the browser alike.

Also, in case that you're running the process in NodeJS, you'll receive an `args` array, from process.

## Examples

You'll need to enable experimental decorators via `experimentalDecorators` and `Es6` target is recommended (Lower versions might lack builtin `Promise` objects):

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "ES6"
  }
}
```

Example of usage:

```typescript
import entry from 'ts-entry-point'

/**
 * Classical entry point main class.
 */
@entry
class Main {
  static main(args: string[]) {
    console.log(`Hello wordl! arg count = ${args.length}`)
  }
}
```

See `example.ts` for more insight.

## Contributing

Right now the setup for the TS compiler constraints is quite loose, feel free to open a pull request to make the project more compatible across different setups.

[ts]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[maintained]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[license]: https://img.shields.io/github/license/sigmasoldi3r/ts-entry-point.svg
[ver]: https://img.shields.io/npm/v/ts-entry-point.svg
