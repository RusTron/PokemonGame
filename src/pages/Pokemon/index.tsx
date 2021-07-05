import React, { FC } from 'react';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemon';

export interface PokemonProps {
  id: string;
}

const Pokemon: FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id: 25 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is pokemon {data?.name}</div>;
};

export default Pokemon;
