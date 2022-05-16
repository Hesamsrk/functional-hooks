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
