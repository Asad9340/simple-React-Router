import { Link } from 'react-router-dom';

function User({ user }) {
  const { id, name, website, email } = user;
  return (
    <div className="border rounded-lg p-3">
      <h3 className="text-xl font-semibold  bg-gray-900 text-white rounded-lg p-2 text-center">
        {name}
      </h3>
      <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium  hover:bg-gray-400 duration-300">
        Website: {website}
      </p>
      <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium hover:bg-gray-400 duration-300 mb-6">
        Email: {email}
      </p>
      <div className='text-center mb-4'>
        <Link
          className="border px-4 py-2 rounded-lg bg-gray-900 text-white"
          to={`/users/${id}`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

export default User;
