// hooks/useAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const useAuth = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login-page');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  return { isAuthenticated, loading };
};

export default useAuth;
