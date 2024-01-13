'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <nav>
          <div className={style.wrapperLeft}>
            <div className={pathname === '/' ? style.btnNavActive : style.btnNav}>
              <Link href='/'>Home</Link>
            </div>
          </div>

          <div className={style.wrapperRight}>
            {[
              { title: 'Sign in', linkPage: '/auth' },
              { title: 'Sign up', linkPage: '/reg' },
            ].map((el, i) => (
              <div className={pathname === el.linkPage ? style.btnNavActive : style.btnNav} key={i}>
                <Link href={el.linkPage}>{el.title}</Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
