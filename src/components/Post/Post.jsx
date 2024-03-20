function Post({ post }) {
  console.log(post)
  const { body, title, userId } = post;
  return (
    <div className="border rounded-lg p-3">
      <h3 className="text-xl font-semibold  bg-gray-900 text-white rounded-lg p-2">{userId }{'.'}  {title}</h3>
      <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg">{body}</p>
    </div>
  )
}

export default Post