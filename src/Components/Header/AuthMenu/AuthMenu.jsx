'use client';

import Image from 'next/image';

// auth context
import { UserAuth } from '@/context/AuthContext';

// custom hook / emotion styled
import useAuthenticationLoading from '@/hooks/useAuthenticationLoading';
import { ButtonSignIn, ButtonSignOut, ButtonText, UserDisplayName, UserDiv } from './AuthMenu.styled';

export const AuthMenu = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  // hook for managing loading state during user authentication process
  const loading = useAuthenticationLoading(user);

  // func signIn
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // func signOut
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? null : !user ? (
        <ButtonSignIn type="button" onClick={handleSignIn}>
          Sign In
        </ButtonSignIn>
      ) : (
        <UserDiv>
          <UserDisplayName>{user.displayName}</UserDisplayName>
          <ButtonSignOut type="button" onClick={handleSignOut}>
            <ButtonText>Logout</ButtonText>
            <Image
              src={'logout.svg'}
              alt="whatsapp link"
              width={25}
              height={25}
              quality={100}
              priority
            />
          </ButtonSignOut>
        </UserDiv>
      )}
    </div>
  );
};
