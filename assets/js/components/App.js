import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveCard } from '../actions/actions';
import CardList from './CardList';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const App = (props) => {
  return (
    <div>
      {props.cardLists.map((list) => {
        return (
          <div key={list.id} style={{border: 'dotted', borderWidth: '0.1px', width: '33%', backgroundColor: '#f5f5f0', float: 'left'}}>
            <CardList cardListId={list.id} {...props} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cardLists: state.cardLists,
    cards: state.cards,
    cardsByList: state.cardsByList,
    onCardDrop: (id, listId) => moveCard(id, listId)
  }
}

App.propTypes = {
  cardLists: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  cardsByList: PropTypes.array.isRequired,
  onCardDrop: PropTypes.func.isRequired,
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default DragDropContext(HTML5Backend)(AppContainer);
