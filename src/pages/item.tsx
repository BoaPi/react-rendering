import React, { useContext } from 'react';
import { HandlerContext } from '.';

type Country = {
  id: number,
  name: string,
}

export default React.memo(function Item({ name }: Country) {
  console.log('Item - render');

  const {count } = useContext(HandlerContext);

  return (
    <div>{name}
      <button onClick={() => count({ type: 'up' })}>Up by + 1</button>
    </div>
  );
})