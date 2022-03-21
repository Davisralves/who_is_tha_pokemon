export const isString = (value: any) => typeof value === 'string'; 

export const isNumber = (value: any) => typeof value === 'number';

export const AllAreString = (value: string[]) => value.every((item) => isString(item)); 

export const AllAreNumbers = (value: string[]) => value.every((item) => isNumber(item)); 
