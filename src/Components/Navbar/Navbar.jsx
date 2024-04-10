'use client';

import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);

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
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>

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
    </nav>
  );
};
