import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

function Posts() {
  const posts = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto">
      <div className='bg-gray-700 mt-6 rounded-lg text-white text-center py-2 mx-3'>
        <h1 className='text-2xl font-bold'>This is Home section</h1>
        <p className='text-lg font-semibold'>Number of Post: {posts.length}</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}

export default Posts;
