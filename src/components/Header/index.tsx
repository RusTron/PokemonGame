import React, { memo } from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';
import { GENERAL_MENU } from '../../routes';

import { ReactComponent as Pokemon } from './assets/Pokemon.svg';

// interface MenuType {
//   id: number;
//   value: string;
//   link: string;
// }

const Header = () => {
  const path = usePath();
  console.log(path);
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <Pokemon />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              href={link}
              key={title}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
