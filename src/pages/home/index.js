import React from 'react';
import Banner from '../../components/banner';
import Details from '../../components/datails';
import Prescrb from '../../components/prescrb';
import Conditions from '../../components/condition';

export default function Home() {
  return (
    <div>
      <Banner />
      <Details />
      <Prescrb />
      <Conditions />
    </div>
  );
}
