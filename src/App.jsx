import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What is a function",
      description: "lorem ipsum blah blah blah",
    },
  ]);

  return (
    <>
      <header className="header">
        <div className="container">icantcode</div>
      </header>

      <section className="container feed">
        <h2>Add Post</h2>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Create Post</button>

        <h1>Your feed</h1>
        <ul id="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
