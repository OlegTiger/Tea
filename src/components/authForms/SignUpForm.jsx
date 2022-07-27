import React from 'react';

export default function SignUpForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputPassword2"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
