'use client'

import Image from 'next/image';

import { UserAuth } from "@/context/AuthContext";
import { Container, ErrorText, Li } from "../ProfilePage/ProfilePage.styled"
import { Ul } from './ProfilePage.styled';
import useAuthenticationLoading from '@/hooks/useAuthenticationLoading';

export const ProfilePage = () => {
  const { user } = UserAuth();

  // hook for managing loading state during user authentication process
  const loading = useAuthenticationLoading(user);

  return (
    <Container>
      {loading ? null : !user ? (
        <ErrorText>You must be logged in to view this page</ErrorText>
      ) : (
        <>
          <Image
            src={user.photoURL}
            alt="whatsapp link"
            width={100}
            height={100}
            quality={100}
            priority
            style={{ borderRadius: '100%' }}
          />

          <Ul>
            <Li>{user.displayName}</Li>
            <Li>{user.email}</Li>
          </Ul>
        </>
      )}
    </Container>
  );
}