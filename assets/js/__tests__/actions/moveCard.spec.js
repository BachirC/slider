import { moveCardDefinition } from '../../actions/actions'
import { MOVE_CARD } from '../../constants'

describe('action creators', () => {
  it('creates MOVE_CARD action', () => {
    const id = '1'
    const listId = '2'
    const expectedAction = {
      type: MOVE_CARD,
      id,
      listId
    }

    expect(moveCardDefinition(id, listId)).toEqual(expectedAction)
  })
})
