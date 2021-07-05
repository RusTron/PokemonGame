import React from 'react';
import { navigate } from 'hookrouter';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from './components/Parallax';
import s from './Home.module.scss';
import { LinkEnum } from '../../utils/enums';

export default function Home() {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
}
