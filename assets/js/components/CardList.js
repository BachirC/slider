import React, { Component } from 'react';
import Card from './Card';
import { DndItemTypes } from '../constants';
import { DropTarget } from 'react-dnd';

const CardList = ({connectDropTarget, cardsByList, cardLists, cardListId, isOver, canDrop, ...props}) => {

  return connectDropTarget(
    <ul className="w3-ul" style={{listStyleType: 'none', height: '500px'}} key={props.cardListId}>
      <li>
        <h2>{cardLists.find((list) => list.id === cardListId).title}</h2>
      </li>
      {cardsByList.find((list) => list.listId === cardListId).cardIds.map((card) => {
        return (
          <li key={card} style={{backgroundColor: 'yellow'}}>
            <Card cardId={card} {...props} />
          </li>
        );
      })}
    </ul>
  );
}

const renderOverlay = (color) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
      opacity: 0.5,
      backgroundColor: color,
    }} />
  );
}

const listTarget = {
  drop(props, monitor) {
    let draggedCard = monitor.getItem();
    return props.onCardDrop(draggedCard.id, props.cardListId);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export default DropTarget(DndItemTypes.CARD, listTarget, collect)(CardList);
