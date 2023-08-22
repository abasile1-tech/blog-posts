import { useState } from "react";
import PropTypes from "prop-types";

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
    setTitle("");
    setDescription("");
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
PostForm.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  //setPosts: PropTypes.isRequired,
};

export default PostForm;
