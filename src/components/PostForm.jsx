import { useState } from "react";

function PostForm({ posts, setPosts }) {
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
    </>
  );
}

export default PostForm;
