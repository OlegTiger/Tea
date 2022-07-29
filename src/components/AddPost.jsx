import React, { useState } from 'react';

export default function AddPost() {
  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/v1/newpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((res) => {
        // setCurPosts((prev) => [{ ...res, User: { ...user } }, ...prev]);
        setInput({});
        window.location = '/';
      });
  };
  return (

    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Название чая</label>
        <input
          name="tea_name"
          type="text"
          className="form-control"
          onChange={inputHandler}
          value={input.tea_name || ''}
          placeholder="введите название чая"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Место происхождения</label>
        <textarea
          name="place"
          className="form-control"
          onChange={inputHandler}
          value={input.place || ''}
          rows="3"
          placeholder="добавьте место происхождения чая"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Описание</label>
        <textarea
          name="description"
          className="form-control"
          onChange={inputHandler}
          value={input.description || ''}
          rows="3"
          placeholder="Добавьте описание"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Картинка</label>
        <input
          name="img"
          type="text"
          className="form-control"
          onChange={inputHandler}
          value={input.img || ''}
          placeholder="добавьте название картинки"
        />
      </div>
      <div className="form-group" />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Широта</label>
        <input
          name="latitude"
          type="text"
          className="form-control"
          onChange={inputHandler}
          value={input.latitude || ''}
          placeholder="добавьте широту"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Долгота</label>
        <input
          name="longitude"
          type="text"
          className="form-control"
          onChange={inputHandler}
          value={input.longitude || ''}
          placeholder="добавьте широту"
        />
      </div>

      <button type="submit" className="btn btn-outline-success">Добавить чай</button>
    </form>

  );
}
