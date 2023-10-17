export class AiPureException extends Error {
  constructor() {
    super(`aiPure can only be used with functions or getters`);
  }
}

export function aiPure<T>(
  _target: Record<string, any>,
  propertyKey: string,
  { get, enumerable, value }: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> {
  if (get) {
    return {
      configurable: true,
      enumerable,
      get(): T {
        const value = get.call(this);

        Object.defineProperty(this, propertyKey, { enumerable, value });

        return value;
      },
    };
  }

  if (typeof value !== `function`) {
    throw new AiPureException();
  }

  const original = value;

  return {
    configurable: true,
    enumerable,
    get(): T {
      let previousArgs: readonly unknown[] = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue: unknown;

      const patched = (...args: unknown[]): unknown => {
        const isPure =
          originalFnWasCalledLeastAtOnce &&
          previousArgs.length === args.length &&
          args.every((arg, index) => arg === previousArgs[index]);

        if (isPure) {
          return pureValue;
        }

        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;

        return pureValue;
      };

      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched,
      });

      return patched as unknown as T;
    },
  };
}
