import { RESET, UPDATE_HEADER } from '../actions';
import { getHeader, setHeader, unsetHeader } from '../lib/localStorage';

const defaultHeader = 'metadata.type';
const reducer = (state = undefined, action) => {
  switch (action.type) {
    case RESET:
      unsetHeader();
      return defaultHeader;
    case UPDATE_HEADER:
      setHeader(action.value);
      return action.value;
    default:
      return state || getHeader() || defaultHeader;
  }
};

export default reducer;
