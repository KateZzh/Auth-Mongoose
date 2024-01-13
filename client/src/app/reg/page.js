'use client';

import style from './page.module.css';
import Header from '../components/Header/Header';
import Inputs from '../components/Inputs/Inputs';
import ButtonLink from '../components/Buttons/ButtonLink';
import Link from 'next/link';

export default function Reg() {
  const arr = [
    { inputName: 'Name', type: 'text' },
    { inputName: 'Surname', type: 'text' },
    { inputName: 'Email', type: 'text' },
    { inputName: 'Password', type: 'password' },
    { inputName: 'Age', type: 'number' },
  ];

  return (
    <div>
      <Header />

      <section>
        <div className={style.container}>
          <div className={style.wrapper}>
            <h1>Sign up</h1>

            <Inputs arr={arr} />

            <ButtonLink text='Sign Up' href='/' />

            <p>
              Already have an account?
              <span>
                <Link href='/auth'>Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
