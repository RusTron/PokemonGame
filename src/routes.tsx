import React from 'react';
import EmptyPage from './pages/EmptyPage';
import Pokedex from './pages/Pokedex';
import Home from './pages/Home';
import { LinkEnum } from './utils/enums';

interface GeneralMenuType {
  title: string;
  link: string;
  component: () => JSX.Element;
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

interface AccTypes {
  [key: string]: () => JSX.Element;
}
const routes = GENERAL_MENU.reduce((acc: AccTypes, item: GeneralMenuType) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
