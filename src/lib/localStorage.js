const keyPrefix = 'pprint-ndjson-4ccc828b-b372-4274-ab19-c6dd1055e856';
const headerKey = `${keyPrefix}-header`;
const sortKey = `${keyPrefix}-sort`;

export const getHeader = () => localStorage.getItem(headerKey);
export const setHeader = header => localStorage.setItem(headerKey, header);
export const unsetHeader = () => localStorage.removeItem(headerKey);

export const getSort = () => localStorage.getItem(sortKey);
export const setSort = sort => localStorage.setItem(sortKey, sort);
export const unsetSort = () => localStorage.removeItem(sortKey);
