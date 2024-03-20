import { useLoaderData } from "react-router-dom"

function UserDetails() {
  const user = useLoaderData();
  const { name, email, website, phone, username,address } = user;
  console.log(user);
  return (
    <div className="flex justify-center">
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
        <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium hover:bg-gray-400 duration-300 mb-6">
          Email: {email}
        </p>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default UserDetails