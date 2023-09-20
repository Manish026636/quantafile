import React from 'react';

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="w-full max-w-md p-6 m-auto  dark:bg-gray-800">
        <h2 className='text-center text-2xl mt-10 font-bold'>Log in</h2>
        <form className="mt-10">
          <div>
            <input
              type="email"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
            />
          </div>

          <div className="mt-4">
            

            <input
              type="password"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>
         

          <div className="mt-6">
            <button
              className="w-full px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Log in
            </button>
          </div>
          <div className="flex pt-4 items-center justify-center">
              <span  className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</span>
            </div>
        </form>

        {/* Social Media Login */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p  className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">
            or login with 
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-4 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-xl hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
              </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Log in with Google</span>
          </button>

          
        </div>

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          Don't have an account? <span  className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
