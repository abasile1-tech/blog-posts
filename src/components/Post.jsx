import PropTypes from "prop-types";

function Post({ post }) {
  return (
    <>
      <li className="post">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </li>
    </>
  );
}
Post.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Post;
