'use client';

import style from './page.module.css';
import Header from '../components/Header/Header';
import Inputs from '../components/Inputs/Inputs';
import Button from '@mui/joy/Button';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const [inp, setInp] = useState({ email: '', password: '' });
  const router = useRouter();

  const arr = [
    { inputName: 'Email', type: 'text' },
    { inputName: 'Password', type: 'password' },
  ];

  const authUser = async () => {
    const request = await axios.post('http://localhost:3001/user/auth', inp, { withCredentials: true });
    console.log(request.data);
    router.push('/home');
  };

  return (
    <div>
      <Header />

      <section>
        <div className={style.container}>
          <div className={style.wrapper}>
            <h1>Sign in</h1>

            <Inputs arr={arr} setInp={setInp} inp={inp} />

            <Button variant='solid' onClick={authUser}>Sign in</Button>

            <p>
              Don't have an account yet?
              <span>
                <Link href='/reg'> Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
