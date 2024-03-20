import { BounceLoader } from "react-spinners";
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center my-10 my-6">
      <BounceLoader color="#36d7b7" />
    </div>
  );
}

export default LoadingSpinner