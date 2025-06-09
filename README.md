# Fluffy Octo Adventure

A React library that provides a custom name context for managing names in your React applications.

## Installation

```bash
npm install @snaveevans/fluffy-octo-adventure
```

## Usage

```tsx
import { NameProvider, useName } from "@snaveevans/fluffy-octo-adventure";

// Wrap your app with the NameProvider
function App() {
  return (
    <NameProvider initialName="John">
      <YourComponents />
    </NameProvider>
  );
}

// Use the name context in any child component
function YourComponent() {
  const { name, setName } = useName();

  return (
    <div>
      <p>Current name: {name}</p>
      <button onClick={() => setName("Jane")}>Change Name</button>
    </div>
  );
}
```

## API

### NameProvider

A context provider component that manages the name state.

Props:

- `children`: React nodes to be wrapped by the provider
- `initialName` (optional): Initial value for the name (defaults to empty string)

### useName

A hook that provides access to the name context.

Returns:

- `name`: The current name value
- `setName`: Function to update the name value

## Publishing

This package is published to the GitHub Package Registry. To use it, you need to:

1. Create a `.npmrc` file in your project with:

```
@snaveevans:registry=https://npm.pkg.github.com
```

2. Authenticate with GitHub Packages:

```bash
npm login --registry=https://npm.pkg.github.com
```

## License

MIT
