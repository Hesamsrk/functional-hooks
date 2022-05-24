# functional-hooks

Just another react custom hook library focused on being light-weight, simple, and easy to use.

## Credits

- [functional-hooks](https://www.npmjs.com/package/functional-hooks) uses [Vite](https://vitejs.dev/) as build
  environment for minimal and robust results.
  <be>
- It's also implemented using [typescript](https://www.typescriptlang.org/) so all the type definitions are built-in and
  no external package needs to be installed.

## Index

- [functional-hooks](#functional-hooks)
  - [Credits](#credits)
  - [Index](#index)
  - [Installation](#installation)
- [Documentation](#documentation)
  - [useDebouncedState](#usedebouncedstate)
  - [useDeepClone](#usedeepclone)
  - [useLocalStorage](#uselocalstorage)
  - [useQueue](#usequeue)
  - [useStateWithTrack](#usestatewithtrack)

## Installation

```sh
# npm
npm install functional-hooks
# yarn
yarn add functional-hooks
```

# Documentation

## useDebouncedState

Works as a normal react built-in [useState](https://reactjs.org/docs/hooks-state.html) hook, in addition, the state will
be set as a debounced value after a dedicated delay.<br><br>
In other words, the state value is going to be set after a small period of time, if the set function is not invoked
again during the timeout, otherwise, the timeout is going to be restarted.
<br>

- This hook, can have many use cases; for example, when you want to implement a search text field in react you can set
  its value in a debounced state using this hook and send the search request to server after this state is set to a
  value.

[See the code below on github](examples/useDebouncedState.example.tsx)

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

## useDeepClone

It works as a duplicator for your states or props. You can create, keep and modify the component specific version of a
particular state or prop.

[See the code below on github](examples/useDeepClone.example.tsx)

```tsx
import {useDeepClone} from "functional-hooks";
import React, {FunctionComponent} from "react";

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: Date
}


export const SomeComponent: FunctionComponent<{ Posts: Post[] }> = (
  {Posts}
) => {
  const [internalPosts, setInternalPosts] = useDeepClone<Post[]>(Posts)

  return <main>
    {internalPosts.map(post => (
      <section>
        <title>
          {post.title}
        </title>
        <div>
          {post.content}
        </div>
        <button onClick={() => setInternalPosts((prevState => prevState.filter((item) => item.id === post.id)))}>
          Remove Post
        </button>
      </section>
    ))}
  </>

}
```

## useLocalStorage

Gives you the access to local storage I/O and lets you to read from and write to it much easier.
<br/>

- It works like a simple useState hook. In addition, the state will be consistent and will not be removed after user
  refreshes the page.

`Example: Coming soon!`

## useQueue

Works as a normal react built-in [useState](https://reactjs.org/docs/hooks-state.html) hook, in addition, the state will
be a queue.

`Example: Coming soon!`

## useStateWithTrack

Works as a normal react built-in [useState](https://reactjs.org/docs/hooks-state.html) hook, in addition, the
state's <b>history</b> will be preserved in the memory and user can access to the former values of that particular state
at any time.

- User can determine the size of items kept in the memory.

`Example: Coming soon!`
