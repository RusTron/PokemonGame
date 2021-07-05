export interface IPokemons {
  total: number;
  pokemons: PokemonsRequest[];
}

const pokemons = {
  name_clean: 'caterpie',
  abilities: ['shield-dust', 'run-away'],
  stats: {
    hp: 45,
    attack: 30,
    defense: 35,
    'special-attack': 20,
    'special-defense': 20,
    speed: 45,
  },
  types: ['bug'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
  name: 'caterpie',
  base_experience: 39,
  height: 3,
  id: 10,
  is_default: true,
  order: 14,
  weight: 29,
};

export type PokemonsRequest = typeof pokemons;
