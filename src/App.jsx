import { useState } from "react";
import "./App.css";
import PostContainer from "./containers/PostContainer.jsx";

function App() {
  /*
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What is a function",
      description: "lorem ipsum blah blah blah",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPost = () => {
    const newPost = {
      id: posts.length + 1,
      title,
      description,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <header className="header">
        <div className="container">icantcode</div>
      </header>

      <section className="container feed">
        <h2>Add Post</h2>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button onClick={createPost}>Create Post</button>

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
  */
  return (
    <>
      <PostContainer />
    </>
  );
}

export default App;
