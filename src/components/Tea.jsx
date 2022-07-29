import React from 'react';


export default function Tea({ tea }) {
  return (
    <div>
      <li>
        <a href={`http://localhost:3000/tea/${tea.id}`}>
          {tea.tea_name}
        </a>
      </li>
    </div>
  );
}
