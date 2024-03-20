function User({ user }) {
  console.log(user)
  const { name, website, email } = user;
  return (
    <div className="border rounded-lg p-3">
      <h3 className="text-xl font-semibold  bg-gray-900 text-white rounded-lg p-2 text-center">
        {name}
      </h3>
      <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium  hover:bg-gray-400 duration-300">
        Website: {website}
      </p>
      <p className="bg-gray-300 text-black mt-2 p-2 rounded-lg font-medium hover:bg-gray-400 duration-300">
        Email: {email}
      </p>
    </div>
  );
}

export default User