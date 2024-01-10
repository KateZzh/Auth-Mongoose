'udr client';

import Header from '../components/Header';

export default function Reg() {
  return (
    <div>
      <Header />

      <h1>Registration</h1>

      <input type='text' placeholder='name...' />
      <input type='text' placeholder='surname...' />
      <input type='text' placeholder='email...' />
      <input type='text' placeholder='password...' />
      <input type='text' placeholder='age...' />

      <button>Sign up</button>
    </div>
  );
}
