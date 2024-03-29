'use client';

import style from './Inputs.module.css';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function Inputs({ arr, setInp, inp }) {
  const changeInp = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.form}>
      {arr.map((el, i) => (
        <div className={style.inputForm} key={i}>
          <FormLabel>{el.inputName}</FormLabel>
          <Input type={el.type} name={el.inputName.toLowerCase()} onChange={changeInp} />
        </div>
      ))}
    </div>
  );
}
