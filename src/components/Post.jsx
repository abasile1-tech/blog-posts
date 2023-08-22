import PropTypes from "prop-types";

function Post({ post, handleLike }) {
  return (
    <>
      <li className="post">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button onClick={() => handleLike(post)}>
          {post.liked == true ? "Unlike" : "Like"}
        </button>
      </li>
    </>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default Post;
