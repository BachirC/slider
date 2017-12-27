import { initialState, MOVE_CARD } from '../constants';

export default function root(state = initialState, action) {
  switch(action.type) {
    case MOVE_CARD:
     let cardsByList = [...state.cardsByList];

     let targetList = cardsByList.find((e) => e.listId === action.listId);
     let sourceList = cardsByList.find((e) => e.cardIds.includes(action.id));

     if (sourceList.listId === action.listId) return state;

     sourceList.cardIds.splice(sourceList.cardIds.indexOf(action.id), 1);
     targetList.cardIds.push(action.id);

     cardsByList[cardsByList.indexOf(sourceList)] = sourceList;
     cardsByList[cardsByList.indexOf(targetList)] = targetList;

      return {cardsByList: cardsByList, ...state};

    default: return state;
  }
}
