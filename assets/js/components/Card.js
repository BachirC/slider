import React from 'react';

const Card = (props) => {
  return(
    <div key={props.cardId} style={{border: 'solid', borderWidth: '1px'}}>
      {props.cards.find((card) => card.id === props.cardId).name}
    </div>
  )
}

export default Card;
