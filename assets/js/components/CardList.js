import React, { Component } from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div key={props.cardListId}>
      {props.cardsByList.find((list) => list.listId === props.cardListId).cardIds.map((card) => {
        return (<Card cardId={card} {...props} />);
      })}
    </div>
  );
}

export default CardList;
