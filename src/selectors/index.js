import sortBy from 'lodash.sortby';
import { createSelector } from 'reselect';

function tryParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

export const outputSelector = createSelector(
  [ ({ input }) => input, ({ sort }) => sort ],
  (input, sort) => {
    const unsorted = input
      .split('\n')
      .map(tryParse);

    return sortBy(unsorted, [sort]);
  }
)
