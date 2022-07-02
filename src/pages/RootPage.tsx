import { css, cx } from '@emotion/css';
import Button from '@mui/material/Button';
import React, { FC, useContext, useState } from 'react';
import AddDestination from '../components/Destinations/AddDestination';
import { Context as DestinationContext } from '../components/Destinations/Context';
import Destinations from '../components/Destinations/Destinations';
import Actions from '../components/shared/Actions';
import { Destination } from '../types';
// import logo from '../img/logo.svg';
import './App.css';

// interface Props {}

export const RootPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { destinations, setDestinations } = useContext(DestinationContext);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const addDestination = (destination: Destination) => {
    setDestinations([...destinations, destination]);
  };
  return (
    <div className={style.global}>
      <div className={style.title}>Destinations</div>
      <Actions>
        <Button className={cx(style.button, style.addButton)} variant="contained" onClick={() => setIsAddOpen(true)}>
          + Ajouter
        </Button>
      </Actions>
      <AddDestination addDestination={addDestination} isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
      <Destinations destinations={destinations} />
    </div>
  );
};

const style = {
  button: css`
    height: 40px;
  `,
  addButton: css`
    background-color: #19d26f !important;
    font-weight: bold !important;
  `,
  global: css`
    padding: 80px;
    background-color: whitesmoke;
    min-height: 800px;
  `,
  title: css`
    font-size: 25px;
    display: inline-block;
  `,
};
