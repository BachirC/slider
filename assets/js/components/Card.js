import React from 'react';
import { DndItemTypes } from '../constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';

const cardSource = {
  beginDrag(props) {
    return {id: props.cardId};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Card = ({connectDragSource, isDragging, ...props}) => {
  return connectDragSource(
    <div key={props.cardId}
         style={{
           padding: '10px',
           opacity: isDragging ? 0.5 : 1,
           cursor: 'move'}}>
      {props.cards.find((card) => card.id === props.cardId).name}
    </div>
  )
}

Card.propTypes = {
  cardId: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
}

export default DragSource(DndItemTypes.CARD, cardSource, collect)(Card);
