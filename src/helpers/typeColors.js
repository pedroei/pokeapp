export const changeColor = (type) => {
  if (type === 'normal') return '#A8A878';
  if (type === 'fighting') return '#C03028';
  if (type === 'flying') return '#A890F0';
  if (type === 'poison') return '#A040A0';
  if (type === 'ground') return '#E0C068';
  if (type === 'rock') return '#B8A038';
  if (type === 'bug') return '#A8B820';
  if (type === 'ghost') return '#705898';
  if (type === 'steel') return '#B8B8D0';
  if (type === 'fire') return '#F08030';
  if (type === 'water') return '#6890F0';
  if (type === 'grass') return '#78C850';
  if (type === 'electric') return '#F8D030';
  if (type === 'psychic') return '#F85888';
  if (type === 'ice') return '#98D8D8';
  if (type === 'dragon') return '#7038F8';
  if (type === 'dark') return '#705848';
  if (type === 'fairy') return '#EE99AC';
  if (type === 'unknown') return '#68A090';
  if (type === 'shadow') return '#370637';

  return '#ccc';
};
