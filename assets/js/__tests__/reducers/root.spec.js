import { initialState } from '../../constants';
import rootReducer from '../../reducers/root';
import { MOVE_CARD } from "../../constants";

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  })

  it('handles MOVE_CARD', () => {
    let state = {
      cardLists: [
                  {id: "1", title: 'À RENCONTRER'},
                  {id: "2", title: 'ENTRETIEN'}
                ],
      cards: [
              {id: "1", name: 'Joe'}
             ],
      cardsByList: [
                    {listId: "1", cardIds: ["1"]},
                    {listId: "2", cardIds: []},
                   ]
    }

    let expectedCardsByList = [{listId: "1", cardIds: []}, {listId: "2", cardIds: ["1"]}];
    expect(
      rootReducer(state, {
        type: MOVE_CARD,
        listId: '2',
        id: '1'
      })
    ).toEqual({cardsByList: expectedCardsByList, ...state})
  })
})
