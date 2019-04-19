import { RESET, UPDATE_SORT } from '../actions';
import { getSort, setSort, unsetSort } from '../lib/localStorage';

const defaultSort = 'metadata.time';

export default (state = undefined, action) => {
  switch (action.type) {
    case RESET:
      unsetSort()
      return defaultSort;
    case UPDATE_SORT:
      setSort(action.value);
      return action.value;
    default:
      return state || getSort() || defaultSort;
  }
};
