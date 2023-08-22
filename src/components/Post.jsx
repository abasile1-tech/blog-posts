import PropTypes from "prop-types";

function Post({ post }) {
  const isLiked = () => {
    if (post.liked == true) {
      return "Unlike";
    } else {
      return "Like";
    }
  };

  return (
    <>
      <li className="post">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button>{isLiked()}</button>
      </li>
    </>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
