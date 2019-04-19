import { combineReducers } from 'redux';

import header from './header';
import input from './input';
import sort from './sort';

export default combineReducers({ header, input, sort });
