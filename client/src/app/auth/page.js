'use client';

import Header from '../components/Header';

export default function Auth() {
  return (
    <div>
      <Header />

      <h1>Authorization</h1>

      <input type='text' placeholder='email...' />
      <input type='text' placeholder='password...' />

      <button>Sign in</button>
    </div>
  );
}
