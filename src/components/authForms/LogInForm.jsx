import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogInForm({ setAuthUser }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({ password: '', email: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.password !== '' && input.email !== '') {
      console.log('PAMAGITE');
      axios.post('/api/v1/users2', input)
        .then((res) => {
          navigate('/');
          console.log(res.data);
          setAuthUser(res.data);
        });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input
          value={input.email}
          onChange={changeHandler}
          type="text"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          value={input.password}
          onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Log in</button>
    </form>
  );
}
