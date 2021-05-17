import React from 'react';
import s from './Header.module.scss';

import { ReactComponent as Pokemon } from './assets/Pokemon.svg';

interface MenuType {
  id: number;
  value: string;
  link: string;
}

const Header = () => {
  const MENU: Array<MenuType> = [
    {
      id: 1,
      value: 'Home',
      link: '#',
    },
    {
      id: 2,
      value: 'Pokedex',
      link: '#',
    },
    {
      id: 3,
      value: 'Legandaries',
      link: '#',
    },
    {
      id: 4,
      value: 'Documentation',
      link: '#',
    },
  ];

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <Pokemon />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <a href={link} key={id} className={s.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
