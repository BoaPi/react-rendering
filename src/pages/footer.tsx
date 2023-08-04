import React from 'react';

interface Footer {
  handler: () => number,
}

export default function Footer() {
  console.log('Footer - render');

  return (
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quibusdam.</p>
  );
}