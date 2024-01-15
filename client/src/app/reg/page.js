'use client';

import style from './page.module.css';
import Header from '../components/Header/Header';
import Inputs from '../components/Inputs/Inputs';
import Button from '@mui/joy/Button';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Reg() {
  const [inp, setInp] = useState({ name: '', surname: '', email: '', password: '', age: '' });
  const router = useRouter();

  const createUser = async () => {
    const request = await axios.post('http://localhost:3001/user/reg', inp, { withCredentials: true });
    console.log(request.data);

    router.push('/home');
  };

  const arr = [
    { inputName: 'Name', type: 'text' },
    { inputName: 'Surname', type: 'text' },
    { inputName: 'Age', type: 'number' },
    { inputName: 'Email', type: 'text' },
    { inputName: 'Password', type: 'password' },
  ];

  return (
    <div>
      <Header />

      <section>
        <div className={style.container}>
          <div className={style.wrapper}>
            <h1>Sign up</h1>

            <Inputs arr={arr} setInp={setInp} inp={inp} />

            <Button variant='solid' onClick={createUser}>Sign Up</Button>

            <p>
              Already have an account?
              <span>
                <Link href='/auth'> Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
