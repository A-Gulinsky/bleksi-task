'use client';

import { UserAuth } from '@/context/AuthContext';
import useAuthenticationLoading from '@/hooks/useAuthenticationLoading';

export const AuthMenu = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const loading = useAuthenticationLoading(user);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? null : user ? (
        <div>
          <p>Welcome</p>
          <p onClick={handleSignOut}>LOGOUT</p>
        </div>
      ) : (
        <ul>
          <li onClick={handleSignIn}>SignIn</li>
        </ul>
      )}
    </>
  );
};
