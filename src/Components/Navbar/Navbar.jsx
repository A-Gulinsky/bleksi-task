
import Link from 'next/link'
import { UserAuth } from '@/context/AuthContext';

export const Navbar = () => {

  const { user } = UserAuth()

  console.log(process.env.FIREBASE_API_KEY);

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

      <ul>
        <li>
          LOGIN
        </li>
        <li>
          LOGIN
        </li>
      </ul>
    </nav>
  );
}