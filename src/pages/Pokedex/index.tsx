import React, { useState, ChangeEvent } from 'react';

import s from './Pokedex.module.scss';

import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';
import { IPokemons } from '../../interface/pokemon';
import useDebounce from '../../hook/useDebounce';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const debounceValue = useDebounce(searchValue, 1000);

  const { isLoading, isError, data } = useData<IPokemons>('getPokemons', query, [debounceValue]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something wrong...</div>;

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery({
      name: e.target.value,
    });
  };

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Heading type="h1">
          {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchValue} />
        </div>
        <ul className={s.pokemonCards}>
          {data &&
            data.pokemons.map((pokemon: any) => {
              const { id, stats, types, img } = pokemon;
              return (
                <PokemonCard
                  key={id}
                  name={pokemon.name_clean}
                  attack={stats.attack}
                  defense={stats.defense}
                  types={types}
                  img={img}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
