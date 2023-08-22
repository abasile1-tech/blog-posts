import Post from "./Post";
import PropTypes from "prop-types";

function PostList({ posts, handleLike }) {
  const postItems = posts.map((post) => (
    <Post post={post} handleLike={handleLike} key={post.id} />
  ));
  return (
    <>
      <h1>Your feed</h1>
      <ul id="post-list">{postItems}</ul>
    </>
  );
}
PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default PostList;
