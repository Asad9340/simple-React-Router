import { useLoaderData, useNavigate } from 'react-router-dom';

function UserDetails() {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { name, email, website, phone, username, address } = user;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="border rounded-lg p-4 w-1/3">
        <h3 className="text-xl font-semibold  bg-gray-900 text-white rounded-lg p-2 text-center">
          Name: {name}
        </h3>
        <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium  hover:bg-gray-400 duration-300">
          <span className="underline">Address</span> <br />
          City: {address.city} <br />
          street: {address.street} <br />
          ZipCode: {address.zipcode} <br />
        </p>
        <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium  hover:bg-gray-400 duration-300">
          Username: {username}
        </p>
        <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium  hover:bg-gray-400 duration-300">
          Phone: {phone}
        </p>
        <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium  hover:bg-gray-400 duration-300">
          Website: {website}
        </p>
        <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium hover:bg-gray-400 duration-300">
          Email: {email}
        </p>
      </div>
      <div>
        <button
          onClick={handleGoBack}
          className="mt-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 duration-300 text-white rounded-lg font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
