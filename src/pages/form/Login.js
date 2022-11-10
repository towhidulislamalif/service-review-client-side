import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthenticationContext } from '../context/Authentication';

function Login() {
  // title
  useTitle('Login');

  // use context
  const { login, googleSignin, githubSignin } = useContext(
    AuthenticationContext
  );
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [error, setError] = useState('');

  // form submit
  const formSubmit = (event) => {
    event.preventDefault();

    const email = event.target.useremail.value;
    const password = event.target.password.value;

    // sign up new users
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const current = {
          // email: user.email,
          name: user.displayName,
        };
        // get jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(current),
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            localStorage.setItem('token', json.token);
            navigate(from, { replace: true });
          });
        event.target.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // google
  const signinWithGoogle = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // github
  const signinWithGithub = () => {
    githubSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md font-serif p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-semibold italic mb-4">
          Login to your account
        </h1>
        <form
          onSubmit={formSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="useremail" className="block text-gray-600">
              Email or username
            </label>
            <input
              type="email"
              name="useremail"
              id="useremail"
              placeholder="Email or username"
              required
              className="w-full outline-none px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full outline-none px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600"
            />
            <div className="flex justify-between  text-xs text-gray-600">
              <p className="text-red-400">{error}</p>
              <p rel="noopener noreferrer" href="#">
                Forgot Password?
              </p>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-pink-700">
            Log in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={signinWithGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            onClick={signinWithGithub}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/signup"
            className="underline text-gray-800"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
