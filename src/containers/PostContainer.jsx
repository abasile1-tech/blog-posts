import { useState } from "react";
import Header from "../components/header";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

function PostContainer() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What is a function",
      description: "lorem ipsum blah blah blah",
    },
  ]);
  return (
    <>
      <Header />
      <section className="container feed">
        <PostForm posts={posts} setPosts={setPosts} />
        <PostList posts={posts} />
      </section>
    </>
  );
}

export default PostContainer;
