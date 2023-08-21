import Post from "./Post";

function PostList({ posts }) {
  const postItems = posts.map((post) => <Post post={post} key={post.id} />);
  return (
    <>
      <h1>Your feed</h1>
      <ul id="post-list">
        {postItems}
        {/* {posts.map((post) => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))} */}
      </ul>
    </>
  );
}
export default PostList;
