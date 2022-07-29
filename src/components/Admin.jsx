import React from 'react';
import AddPost from './AddPost';
import AllPost from './AllPost';

export default function Admin({ allTea }) {
  return (
    <div>
      <AllPost allTea={allTea} />
      <AddPost />
    </div>
  );
}
