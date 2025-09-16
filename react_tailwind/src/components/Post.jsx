function Post({ post }) {
  return (
    <div className="m-5 card card-border bg-amber-200 w-96">
      <div className="card-body">
        <h2 className="card-title">UserId:{post.userId}</h2>
        <p>Post Id:{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
