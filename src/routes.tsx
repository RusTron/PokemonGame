import React, { PropsWithChildren } from 'react';
import EmptyPage from './pages/EmptyPage';
import Pokedex from './pages/Pokedex';
import Home from './pages/Home';
import { LinkEnum } from './utils/enums';
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface GeneralMenuType {
  title: string;
  link: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: GeneralMenuType[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokedex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legandaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage />,
  },
];

const SECOND_ROUTES: GeneralMenuType[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];
interface AccTypes {
  [key: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: AccTypes, item: GeneralMenuType) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
