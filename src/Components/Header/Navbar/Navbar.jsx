'use client'

import { UserAuth } from '@/context/AuthContext';
import { A, Ul } from './Navbar.styled';
import useAuthenticationLoading from '@/hooks/useAuthenticationLoading';

export const Navbar = () => {

  // user Data
  const { user } = UserAuth();

  // hook for managing loading state during user authentication process
  const loading = useAuthenticationLoading(user);

  return (
    <nav>
      <Ul>
        <li>
          <A href="/">Home</A>
        </li>
        
        {loading
          ? null
          : user && (
              <li>
                <A href="/profile">Profile</A>
              </li>
            ) 
        }
        
      </Ul>
    </nav>
  );
};
