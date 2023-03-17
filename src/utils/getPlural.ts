export const getPlural = (singular: string, count: number) =>
  count > 1 ? `${singular}'s` : singular;
