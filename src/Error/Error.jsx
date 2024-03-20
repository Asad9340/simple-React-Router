import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[300px] w-auto"
          />
          <div>
            <p className="mt-6 text-xl font-semibold text-black">
              {error.status} {error.statusText}
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              {error.data}
            </h1>
            <div className="mt-6 flex items-center space-x-3">
              <button
                onClick={handleBack}
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="mr-2"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mx-auto flex max-w-7xl justify-center">
        <footer className="px-4 py-10">
          <p className="text-base font-semibold text-gray-700">
            © 2023 DevUI Component Library
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Error;
