import React from 'react';
import Banner from '../../components/banner';
import Details from '../../components/datails';
import Prescrb from '../../components/prescrb';
import Conditions from '../../components/condition';
import Features from '../../components/features';

export default function Home() {
  return (
    <div>
      <Banner />
      <Details />
      <Prescrb />
      <Conditions />
      <Features />
    </div>
  );
}
