import Post from "./Post";
import PropTypes from "prop-types";

function PostList({ posts }) {
  const postItems = posts.map((post) => <Post post={post} key={post.id} />);
  return (
    <>
      <h1>Your feed</h1>
      <ul id="post-list">{postItems}</ul>
    </>
  );
}
PostList.propTypes = {
  posts: PropTypes.string.isRequired,
};

export default PostList;
