# Entry point

Zero dependency, simple typescript decorator that makes OOP-like execution easier for class-contained, asyncrhonous entry points.

This is specially oriented to node CLI apps, that need a "main" method that usually is asyncrhonous. But can be synchronous and the environment can be the browser alike.

Also, in case that you're running the process in NodeJS, you'll receive an `args` array, from process.

## Examples

```typescript
import entry from 'entry-point'

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
