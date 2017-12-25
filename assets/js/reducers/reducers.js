import { combineReducers } from 'redux';

const initialState = {
  global: {
    cardLists: [
      {id: 1, title: 'À RENCONTRER'},
      {id: 2, title: 'ENTRETIEN'}
    ],
    cards: [
      {id: 1, name: 'Bachir'}
    ]
  }
}

export default combineReducers({

})
