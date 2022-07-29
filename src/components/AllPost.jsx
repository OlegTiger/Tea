import React from 'react';
import Tea from './Tea';

export default function AllPost({ allTea }) {
  return (
    <div>
      <ul>
        
          {allTea?.map((el) => <Tea tea={el} />)}
        
      </ul>
    </div>
  );
}
