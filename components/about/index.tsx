import AboutHeader from './Header';
import Team from './Team';
import Branch from './Branch';
import Newsletter from '../home/Newsletter';
import Disclaimer from '../home/Disclaimer';
import React from 'react';

export default function About() {
  return (
    <div>
      <AboutHeader />
      <Team />
      <Branch/>
      <Newsletter />
      <Disclaimer />
    </div>
  );
}
