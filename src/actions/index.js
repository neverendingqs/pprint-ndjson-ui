export const RESET = 'RESET';
export const UPDATE_HEADER = 'UPDATE_HEADER';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_SORT = 'UPDATE_SORT';

export const reset = () => ({ type: RESET });
export const updateHeader = header => ({ type: UPDATE_HEADER, value: header });
export const updateInput = input => ({ type: UPDATE_INPUT, value: input });
export const updateSort = sort => ({ type: UPDATE_SORT, value: sort });

