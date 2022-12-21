import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';

const Login = () => {

  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(login({name: "Revati", age: 28, email: "abc@gmail.com"}))}>Login</button>
    </div>
  )
}

export default Login