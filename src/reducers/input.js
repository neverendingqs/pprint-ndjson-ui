import { RESET, UPDATE_INPUT } from '../actions';

const defaultInput = [
  { metadata: { time: 125, type: 'c', previous_time: 235 }, value: 'c_value' },
  { metadata: { time: 124, type: 'b', previous_time: 236 }, value: 'b_value' },
  { metadata: { time: 123, type: 'a', previous_time: 234 }, value: 'a_value' }
].map(JSON.stringify).join('\n');

export default (state = undefined, action) => {
  switch (action.type) {
    case RESET:
      return defaultInput;
    case UPDATE_INPUT:
      return action.value;
    default:
      return state || defaultInput;
  }
};
