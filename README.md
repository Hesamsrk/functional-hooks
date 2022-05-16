# functional-hooks

Just another react custom hook library focused on being light-weight, simple, and easy to use.

## Credits

- This library uses [Vite](https://vitejs.dev/) as build environment for minimal and robust results.
  <be>
- This library is created using [typescript](https://www.typescriptlang.org/) so all the type definitions are built-in
  and no external package needs to be installed.

## Index

- [functional-hooks](#functional-hooks)
  - [Credits](#credits)
  - [Index](#index)
  - [Installation](#installation)
- [Documentations & Examples](#Documentation and examples)
  - [useDebouncedState](#Use Debounced State)

## Installation

```sh
# npm
npm install functional-hooks
# yarn
yarn add functional-hooks
```

# Documentation and examples

## Use Debounced State

Works as a normal react built-in [useState](https://reactjs.org/docs/hooks-state.html) hook, in addition, the state will
be set as a debounced value after a dedicated delay.<br><br>
In other words, the state value is going to be set after a small period of time, if the set function is not invoked
again during the timeout, otherwise, the timeout is going to be restarted.
<br>

- This hook, can have many use cases; for example, when you want to implement a search text field in react you can set
  its value in a debounced state using this hook and send the search request to server after this state is set to a
  value.

[Example](examples/useDebouncedState.example.tsx)

```tsx
import {useDebouncedState} from "../lib";
import React, {useState} from "react";

export const MyCoolSearchInput = () => {
    
  const [results, setResults] = useState(null)
  const [searchValue, setSearchValue, instantlySetValue] = useDebouncedState<string>("", 3000, {
    after: async () => {
      const res = await fetch(`http://localhost:8080/posts?search=${encodeURIComponent(searchValue)}`)
      setResults(await res.json())
    },
    before: () => console.log(`State is going to be set to: ${searchValue}`)
  })

  return (
    <div>
      <input placeholder={"Debounced text field"} onChange={(e) => setSearchValue(e.target.value)}/>
      <input placeholder={"Instant text field"} onChange={(e) => instantlySetValue(e.target.value)}/>
      <pre>
      {results}
    </pre>
    </div>
  )

}

```
