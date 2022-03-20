export const isString = (value: any) => typeof value === 'string'; 

export const AllAreString = (value: string[]) => value.every((item) => isString(item)); 
