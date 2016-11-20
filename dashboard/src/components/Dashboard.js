import cards from '../config';
import React from 'react';
import Card from '../container/cards';
let dash =  () => {
  // debugger;
  return <div>
    {
      cards.map((c,i) =>
        <Card {...c} key = {i} />
      )
    }
  </div>;
};

export default dash;
