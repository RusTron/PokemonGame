import React from 'react';
import { navigate } from 'hookrouter';

import s from './EmptyPage.module.scss';

import Button from '../../components/Button';

import TeamRocket from './assets/Team_Rocket.png';

import { LinkEnum } from '../../routes';

const EmptyPage = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.text}>404</div>
      <div className={s.layer}>
        <img src={TeamRocket} alt="team rocket" />
        <div className={s.subTitle}>
          <span>The rocket team</span> has won this time.
        </div>
        <Button onClick={() => navigate(LinkEnum.HOME)}>
          <span>Return</span>
        </Button>
      </div>
    </div>
  </div>
);

export default EmptyPage;
