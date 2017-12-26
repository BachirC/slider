export const initialState = {
  cardLists: [
              {id: "1", title: 'À RENCONTRER'},
              {id: "2", title: 'ENTRETIEN'},
              {id: "3", title: 'OFFRE'}
            ],
  cards: [
          {id: "1", name: 'Joe'},
          {id: "2", name: 'Fred'},
          {id: "3", name: 'Max'}
         ],
  cardsByList: [
                {listId: "1", cardIds: ["1"]},
                {listId: "2", cardIds: ["2", "3"]},
                {listId: "3", cardIds: []}
               ]
}

export const DndItemTypes = {
  CARD: 'card'
};

export const MOVE_CARD = 'MOVE_CARD';
