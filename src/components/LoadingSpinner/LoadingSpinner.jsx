import { BounceLoader } from "react-spinners";
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center my-10 py-6 mb-10">
      <BounceLoader color="#36d7b7" />
    </div>
  );
}

export default LoadingSpinner