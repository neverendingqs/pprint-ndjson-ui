import { RESET, UPDATE_HEADER } from '../actions';
import { getHeader, setHeader, unsetHeader } from '../lib/localStorage';

const defaultHeader = 'metadata.type';

export default (state = undefined, action) => {
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
