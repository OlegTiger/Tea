import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({ setAuthUser }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: '', password: '', email: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.password !== '' && input.username !== '' && input.email !== '') {
      console.log('PAMAGITE');
      axios.post('/api/v1/users', input)
        .then((res) => {
          navigate('/');
          setAuthUser(res.data);
        });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputUserS" className="form-label">
          Username
        </label>
        <input
          value={input.username}
          onChange={changeHandler}
          type="text"
          name="username"
          className="form-control"
          id="exampleInputUserS"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPasswordS" className="form-label">
          Password
        </label>
        <input
          value={input.password}
          onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPasswordS"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPasswordS2" className="form-label">
          Email
        </label>
        <input
          value={input.email}
          onChange={changeHandler}
          type="email"
          name="email"
          className="form-control"
          id="exampleInputPasswordS2"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
