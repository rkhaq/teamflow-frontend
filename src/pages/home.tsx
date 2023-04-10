// pages/home.tsx
import Loader from 'components/utils/Loader';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import { logout } from 'store/slices/authSlice';

const Home = () => {
  const { loading } = useAuth();

  const { first_name, last_name, email } = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login-page');
    dispatch(logout());
  };

  const dispatch = useDispatch<AppDispatch>();

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="relative">
      <button
        onClick={handleLogout}
        className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      >
        Logout
      </button>
      <div>
        <h1>
          Welcome {first_name}, {last_name} to the Home page! Your email is{' '}
          {email}
        </h1>
      </div>
    </div>
  );
};

export default Home;
