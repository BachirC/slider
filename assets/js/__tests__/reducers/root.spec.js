import { initialState } from '../../constants';
import rootReducer from '../../reducers/root';

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  })
})
