'use client';

import style from './page.module.css';
import Header from '../components/Header/Header';
import Inputs from '../components/Inputs/Inputs';
import ButtonLink from '../components/Buttons/ButtonLink';
import Link from 'next/link';

export default function Auth() {
  const arr = [
    { inputName: 'Email', type: 'text' },
    { inputName: 'Password', type: 'password' },
  ];

  return (
    <div>
      <Header />

      <section>
        <div className={style.container}>
          <div className={style.wrapper}>
            <h1>Sign in</h1>

            <Inputs arr={arr} />

            <ButtonLink text='Sign in' href='/' />

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
