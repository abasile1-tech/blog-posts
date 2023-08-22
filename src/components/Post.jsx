import PropTypes from "prop-types";

function Post({ post }) {
  return (
    <>
      <li className="post">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button>{post.liked == true ? "Unlike" : "Like"}</button>
      </li>
    </>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
