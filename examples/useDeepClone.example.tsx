import {useDeepClone} from "../lib";
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
  </main>

}
