import React, { useState, useEffect } from 'react';

import s from './Pokedex.module.scss';

import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import req from '../../utils/request';

const usePokemons = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const dataResponse = await req('getPokemons');

        setData(dataResponse);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

const Pokedex = () => {
  const { isLoading, isError, data } = usePokemons();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Heading type="h1">
          {data.totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <ul className={s.pokemonCards}>
          {data.pokemons.map((pokemon: any) => {
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
