import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveCard } from '../actions/actions';
import CardList from './CardList';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <div>
      {props.cardLists.map((list) => {
        return (
          <div style={{width: '50%', backgroundColor: '#f5f5f0', float: 'left'}}>
            <div>
              {list.title}
            </div>
            <div style={{backgroundColor: '#f5f5a0'}} >
              <CardList cardListId={list.id} {...props} />
            </div>
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
    onCardDrop: (id) => moveCard(id)
  }
}

App.propTypes = {
  cardLists: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  cardsByList: PropTypes.array.isRequired,
  onCardDrop: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(App);
